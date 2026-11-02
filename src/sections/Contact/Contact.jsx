import { siteConfig } from '@/config/siteConfig';
import Section from '@/components/ui/Section/Section';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';
import './Contact.css';

export default function Contact() {
  return (
    <Section id="contact" title="Have a project in mind?">
      <a className="contact__email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      <div className="contact__layout">
        <div><ContactForm /></div>
        <ContactLinks />
      </div>
    </Section>
  );
}
