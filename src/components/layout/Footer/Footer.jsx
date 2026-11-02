import { siteConfig } from '@/config/siteConfig';
import { useLocalTime } from '@/hooks/useLocalTime';
import './Footer.css';

export default function Footer() {
  const localTime = useLocalTime(siteConfig.timeZone);
  const { github, linkedin } = siteConfig.socials;

  return (
    <footer className="site-footer">
      <span>© {siteConfig.copyrightYear} {siteConfig.name}</span>
      <span>Cairo, {localTime} local time</span>
      <span className="site-footer__links">
        <a href={github.url}>{github.label}</a>
        <a href={linkedin.url}>{linkedin.label}</a>
      </span>
    </footer>
  );
}
