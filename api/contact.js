const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength) {
  return String(value || "").trim().slice(0, maxLength);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ message: "Method not allowed." });
  }

  const body = typeof request.body === "string" ? JSON.parse(request.body || "{}") : (request.body || {});
  if (body.website) return response.status(200).json({ ok: true });

  const name = clean(body.name, 100);
  const email = clean(body.email, 160);
  const company = clean(body.company, 120);
  const projectType = clean(body.projectType, 120);
  const budget = clean(body.budget, 100);
  const message = clean(body.message, 3000);

  if (!name || !EMAIL_PATTERN.test(email) || !projectType || message.length < 20) {
    return response.status(400).json({ message: "Please provide a name, valid email, project type, and a detailed message." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || "jeruzgarde@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    return response.status(503).json({ message: "The contact service is not configured yet." });
  }

  const subject = `Portfolio inquiry: ${projectType} — ${name}`;
  const html = `
    <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#111827">
      <h1 style="font-size:24px">New project inquiry</h1>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#64748b">Name</td><td style="padding:8px 0"><strong>${escapeHtml(name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Email</td><td style="padding:8px 0">${escapeHtml(email)}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Company</td><td style="padding:8px 0">${escapeHtml(company || "Not provided")}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Project</td><td style="padding:8px 0">${escapeHtml(projectType)}</td></tr>
        <tr><td style="padding:8px 0;color:#64748b">Budget</td><td style="padding:8px 0">${escapeHtml(budget || "Prefer to discuss")}</td></tr>
      </table>
      <h2 style="font-size:16px;margin-top:28px">Message</h2>
      <p style="white-space:pre-wrap;line-height:1.65">${escapeHtml(message)}</p>
    </div>`;

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject, html })
    });

    if (!resendResponse.ok) {
      console.error("Resend delivery failed", resendResponse.status, await resendResponse.text());
      return response.status(502).json({ message: "The email provider could not deliver this inquiry." });
    }
    return response.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form error", error);
    return response.status(500).json({ message: "The inquiry could not be delivered right now." });
  }
}
