export default function ContactSuccess({ name }) {
  const firstName = name.trim().split(' ')[0];
  return (
    <div className="contact__success" role="status">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M7.5 12.5l3 3 6-7" />
      </svg>
      <h3>Thank you, {firstName}.</h3>
      <p>Your message is on its way to my inbox.</p>
    </div>
  );
}
