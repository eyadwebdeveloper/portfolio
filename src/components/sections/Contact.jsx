import { useRef, useState } from "react";
import Reveal from "../Reveal";
import useMagnetic from "../../hooks/useMagnetic";
import useRipple from "../../hooks/useRipple";
import { useToast } from "../ToastContext";

export default function Contact() {
  const { showToast } = useToast();
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const sendBtnRef = useRef(null);
  useMagnetic(sendBtnRef);
  useRipple(sendBtnRef);

  const handleChange = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = values;

    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all required fields.");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      showToast("Please enter a valid email address.");
      return;
    }

    setSending(true);
    // Simulated send — swap for a real endpoint (e.g. Formspree, a serverless
    // function, or your own API) when wiring this up to actually deliver mail.
    setTimeout(() => {
      setSending(false);
      showToast("✅ Message sent! I'll get back to you soon.");
      setValues({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact">
      <Reveal>
        <div className="section-eyebrow">Get In Touch</div>
        <h2 className="section-title">
          Let's <em>Build</em> Something
        </h2>
        <div className="section-rule" />
      </Reveal>
      <div className="contact-wrapper">
        <Reveal variant="reveal-left">
          <div className="contact-info-title">Open to new opportunities</div>
          <p className="contact-info-description">
            Have a project in mind, need a developer on your team, or just want to connect? I'm always happy to hear
            from you.
          </p>
          <div className="contact-info-links">
            <a href="mailto:eyad6ashraf@gmail.com" className="contact-info-link">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">eyad6ashraf@gmail.com</div>
              </div>
            </a>
            <a
              href="https://github.com/eyadwebdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-link"
            >
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </div>
              <div>
                <div className="contact-info-label">GitHub</div>
                <div className="contact-info-value">github.com/eyadwebdeveloper</div>
              </div>
            </a>
      <a href="#hero" className="footer-logo" aria-label="Home">
        EA.
      </a>
      <div className="footer-copyright">
        © <span>{year}</span> <span>Eyad Ashraf</span> — Web Developer
      </div>
      <div className="footer-socials">
        <a
          href="https://github.com/eyadwebdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
          aria-label="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
          </svg>
        </a>
          </div>
        </Reveal>
        <Reveal variant="reveal-right">
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="form-group">
                <label htmlFor="cfName">Name</label>
                <input
                  type="text"
                  id="cfName"
                  placeholder="Your name"
                  required
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cfEmail">Email</label>
                <input
                  type="email"
                  id="cfEmail"
                  placeholder="you@example.com"
                  required
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="cfSubject">Subject</label>
              <input
                type="text"
                id="cfSubject"
                placeholder="What's on your mind?"
                value={values.subject}
                onChange={handleChange("subject")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cfMessage">Message</label>
              <textarea
                id="cfMessage"
                placeholder="Tell me about your project..."
                required
                value={values.message}
                onChange={handleChange("message")}
              />
            </div>
            <button type="submit" className="btn-send" ref={sendBtnRef} disabled={sending}>
              {sending ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
