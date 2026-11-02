import { useEffect, useId, useRef, useState } from 'react';
import { siteConfig } from '@/config/siteConfig';
import Button from '@/components/ui/Button/Button';
import './CvDownload.css';

/**
 * One "Download CV" button. Clicking it opens a small menu with the CV versions
 * listed in siteConfig.cvFiles; picking one downloads that file.
 */
export default function CvDownload() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  const getTrigger = () => rootRef.current.querySelector('.cv-download__trigger');

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutsidePress = (event) => {
      if (!rootRef.current.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        getTrigger().focus({ preventScroll: true });
      }
    };

    // preventScroll: focusing must not scroll the page, or the layout jumps.
    menuRef.current.querySelector('a').focus({ preventScroll: true });
    document.addEventListener('pointerdown', closeOnOutsidePress);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  // Close when keyboard focus leaves the whole control (Tab / Shift+Tab).
  const closeOnFocusLeave = (event) => {
    if (!rootRef.current.contains(event.relatedTarget)) setIsOpen(false);
  };

  const moveFocusInMenu = (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const items = [...menuRef.current.querySelectorAll('a')];
    const current = items.indexOf(document.activeElement);
    const step = event.key === 'ArrowDown' ? 1 : -1;
    items[(current + step + items.length) % items.length].focus({ preventScroll: true });
  };

  const openFromKeyboard = (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
    }
  };

  return (
    <div className="cv-download" ref={rootRef} onBlur={closeOnFocusLeave}>
      <Button
        type="button"
        variant="outline"
        magnetic
        className="cv-download__trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        onClick={() => setIsOpen((open) => !open)}
        onKeyDown={openFromKeyboard}
      >
        Download CV
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 15l6-6 6 6" />
        </svg>
      </Button>

      {isOpen && (
        <div id={menuId} ref={menuRef} className="cv-download__menu" role="menu" onKeyDown={moveFocusInMenu}>
          {siteConfig.cvFiles.map((file) => (
            <a
              key={file.id}
              className="cv-download__item"
              role="menuitem"
              href={file.path}
              download
              onClick={() => setIsOpen(false)}
            >
              <b>{file.label}</b>
              <span>{file.description}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}