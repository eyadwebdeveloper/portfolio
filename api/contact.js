const RESEND_API_URL = "https://api.resend.com/emails";
const TO_EMAIL = "eyad6ashraf@gmail.com";
const FROM_EMAIL = "Portfolio Contact <onboarding@resend.dev>";

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return res.status(500).json({ error: "Server is not configured to send email." });
  }

  const { name, email, subject, message, website } = req.body || {};

  if (website) {
    return res.status(200).json({ success: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }
  if (typeof email !== "string" || !email.includes("@") || !email.includes(".")) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const safeName = escapeHtml(String(name).trim());
  const safeEmail = escapeHtml(String(email).trim());
  const safeSubject = escapeHtml(String(subject || "").trim());
  const safeMessage = escapeHtml(String(message).trim()).replace(/\n/g, "<br/>");

  const emailSubject = safeSubject
    ? `Portfolio contact: ${subject}`
    : `Portfolio contact from ${name}`;

  try {
    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: emailSubject,
        html: `
          <div style="font-family: sans-serif; font-size: 15px; color: #111;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            ${safeSubject ? `<p><strong>Subject:</strong> ${safeSubject}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${safeMessage}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Resend API error:", response.status, errorBody);
      return res.status(502).json({ error: "Failed to send message. Please try again later." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return res.status(500).json({ error: "Failed to send message. Please try again later." });
  }
}