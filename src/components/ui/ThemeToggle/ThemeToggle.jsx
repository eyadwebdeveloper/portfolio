import { useThemeToggle } from '@/hooks/useThemeToggle';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const toggleTheme = useThemeToggle();
  return (
    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Switch between light and dark theme">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" />
      </svg>
    </button>
  );
}
