export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || !("email" in body) || typeof body.email !== "string") {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const response = await fetch("https://api.resend.com/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, unsubscribed: false }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.json().catch(() => null) as { message?: string; name?: string } | null;
      // Resend reports an existing contact as a conflict; keep the signup flow idempotent.
      if (response.status === 409 || details?.name === "contact_already_exists") {
        return Response.json({ success: true });
      }
      console.error("Resend contact creation failed:", response.status, details?.name);
      return Response.json({ error: "Could not subscribe this email." }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend request failed:", error);
    return Response.json({ error: "Subscription service is unavailable." }, { status: 502 });
  }
}
