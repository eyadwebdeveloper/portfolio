import { siteConfig } from '@/config/siteConfig';
import { contactSubjects } from '@/data/contactSubjects';
import { useContactForm } from '@/hooks/useContactForm';
import { createMailtoLink } from '@/lib/mailto';
import Button from '@/components/ui/Button/Button';
import SentenceInput from './SentenceInput';
import ContactSuccess from './ContactSuccess';
import './ContactForm.css';

export default function ContactForm() {
  const { values, status, updateField, submit } = useContactForm();
  const isSending = status === 'sending';

  if (status === 'success') return <ContactSuccess name={values.name} />;

  return (
    <form className="contact-form" onSubmit={submit}>
      {/* Honeypot: invisible to people, ticked by spam bots. Web3Forms discards those submissions. */}
      <input
        type="checkbox"
        name="botcheck"
        className="visually-hidden"
        checked={values.botcheck}
        onChange={updateField}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <p className="contact-form__sentence">
        Hi Eyad, my name is{' '}
        <SentenceInput name="name" value={values.name} onChange={updateField} placeholder="your name" aria-label="Your name" />{' '}
        and I’m looking for help with:
      </p>

      <div className="contact-form__chips" role="radiogroup" aria-label="Type of project">
        {contactSubjects.map((subject) => (
          <label key={subject}>
            <input type="radio" name="subject" value={subject} checked={values.subject === subject} onChange={updateField} />
            <span>{subject}</span>
          </label>
        ))}
      </div>

      <p className="contact-form__sentence">
        You can reach me at{' '}
        <SentenceInput name="email" type="email" value={values.email} onChange={updateField} placeholder="you@example.com" aria-label="Your email" />
        . A bit more about it:
      </p>
      <textarea
        name="message"
        rows="4"
        value={values.message}
        onChange={updateField}
        placeholder="What are you building, and when do you need it?"
        aria-label="Message"
        required
      />

      <Button type="submit" magnetic disabled={isSending}>{isSending ? 'Sending' : 'Send message'}</Button>

      <p className="contact-form__status" role="status">
        {status === 'error' && (
          <>
            The message could not be sent. You can{' '}
            <a href={createMailtoLink({ to: siteConfig.email, subject: values.subject, body: values.message })}>email me directly</a>.
          </>
        )}
      </p>
    </form>
  );
}