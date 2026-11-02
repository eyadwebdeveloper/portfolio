import { useCallback } from 'react';

const STORAGE_KEY = 'portfolio-theme';

/** Follows the system theme until the visitor picks one; the choice is then persisted. */
export function useThemeToggle() {
  return useCallback(() => {
    const root = document.documentElement;
    const isDark = root.dataset.theme
      ? root.dataset.theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const nextTheme = isDark ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      /* storage unavailable (private mode): the theme still applies for this session */
    }
  }, []);
}
