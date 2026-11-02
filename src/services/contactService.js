const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

/**
 * Sends the contact form through Web3Forms, which emails it to the address
 * the access key was created with. The visitor's email becomes the reply-to.
 */
export async function sendContactMessage({ name, email, subject, message, botcheck }) {
  if (!ACCESS_KEY) {
    throw new Error('Missing VITE_WEB3FORMS_ACCESS_KEY. See .env.example.');
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: ACCESS_KEY,
      subject: `New project inquiry: ${subject}`,
      from_name: name,
      name,
      email,
      project_type: subject,
      message,
      botcheck,
    }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.message || `Contact request failed with status ${response.status}`);
  }
}