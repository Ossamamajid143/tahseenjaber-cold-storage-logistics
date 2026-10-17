export async function sendContactMessage(input: { name: string; email: string; message: string }) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) throw new Error("Contact message could not be sent.");
}
