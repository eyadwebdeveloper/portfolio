import { siteConfig } from '@/config/siteConfig';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import ContactCv from './ContactCv';

const COPY_LABELS = { idle: 'Copy', copied: 'Copied', failed: siteConfig.email };

export default function ContactLinks() {
  const { status, copy } = useCopyToClipboard(siteConfig.email);
  const { github, linkedin } = siteConfig.socials;

  return (
    <div className="contact__links">
      <button type="button" onClick={copy}>Email<small>{COPY_LABELS[status]}</small></button>
      <a href={github.url}>{github.label}<small>{github.handle}</small></a>
      <a href={linkedin.url}>{linkedin.label}<small>{linkedin.handle}</small></a>
      <ContactCv />
    </div>
  );
}