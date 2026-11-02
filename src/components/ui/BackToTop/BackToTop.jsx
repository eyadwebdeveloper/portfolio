import { useScrollThreshold } from '@/hooks/useScrollThreshold';
import { classNames } from '@/lib/classNames';
import './BackToTop.css';

const SHOW_AFTER_SCROLL_PX = 700;

export default function BackToTop() {
  const isVisible = useScrollThreshold(SHOW_AFTER_SCROLL_PX);
  return (
    <a href="#top" className={classNames('back-to-top', isVisible && 'is-active')} aria-label="Back to top">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </a>
  );
}
