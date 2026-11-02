export function createMailtoLink({ to, subject = '', body = '' }) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
