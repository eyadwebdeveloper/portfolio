import logo from '@/assets/images/logo.svg';
import { siteConfig, navigationLinks } from '@/config/siteConfig';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import ScrollProgress from '@/components/ui/ScrollProgress/ScrollProgress';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label={`${siteConfig.name}, home`}>
        <img className="site-header__logo" src={logo} alt="" width="34" height="34" />
        <span>{siteConfig.name}</span>
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        {navigationLinks.map(({ label, href }) => (
          <a key={href} href={href}>{label}</a>
        ))}
        <ThemeToggle />
        <a className="site-header__cta" href="#contact">Hire me</a>
      </nav>
      <ScrollProgress />
    </header>
  );
}
