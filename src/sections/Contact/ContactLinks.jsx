import { siteConfig } from '@/config/siteConfig';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';

const COPY_LABELS = { idle: 'Copy', copied: 'Copied', failed: siteConfig.email };

export default function ContactLinks() {
  const { status, copy } = useCopyToClipboard(siteConfig.email);
  const { github, linkedin } = siteConfig.socials;

  return (
    <div className="contact__links">
      <button type="button" onClick={copy}>Email<small>{COPY_LABELS[status]}</small></button>
      <a href={github.url}>{github.label}<small>{github.handle}</small></a>
      <a href={linkedin.url}>{linkedin.label}<small>{linkedin.handle}</small></a>
      <a href={siteConfig.cvPath} download>CV<small>Download PDF</small></a>
    </div>
  );
}
