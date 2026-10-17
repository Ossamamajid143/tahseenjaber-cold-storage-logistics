const recipient = "Shuaib@tahseenjaber.com";

type ContactMessage = {
  name: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]!);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    return Response.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const input = body as Partial<ContactMessage>;
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";

  if (!name || !email || !message || name.length > 200 || email.length > 254 || message.length > 10000) {
    return Response.json({ error: "Please provide a name, valid email, and message." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Website contact form: ${name.slice(0, 100)}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `<h2>Website contact form</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Message:</strong></p><p>${safeMessage.replace(/\n/g, "<br>")}</p>`,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.json().catch(() => null) as { name?: string } | null;
      console.error("Resend contact email failed:", response.status, details?.name);
      return Response.json({ error: "Could not send your message." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend contact email request failed:", error);
    return Response.json({ error: "Email service is unavailable." }, { status: 502 });
  }
}
