import { useEffect, useId, useRef, useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

/**
 * The "CV" row of the contact links. Looks exactly like its sibling rows; clicking it
 * expands the CV versions from siteConfig.cvFiles inline, and picking one downloads it.
 */
export default function ContactCv() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = useId();

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnOutsidePress = (event) => {
      if (!rootRef.current.contains(event.target)) setIsOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current.focus();
      }
    };

    document.addEventListener('pointerdown', closeOnOutsidePress);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="contact__cv" ref={rootRef}>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((open) => !open)}
      >
        CV<small>{isOpen ? 'Choose a version' : 'Download PDF'}</small>
      </button>

      <div id={panelId} className={`contact__cv-panel${isOpen ? ' is-open' : ''}`}>
        <div className="contact__cv-options">
          {siteConfig.cvFiles.map((file) => (
            <a key={file.id} href={file.path} download onClick={() => setIsOpen(false)}>
              <span>{file.label}</span>
              <small>{file.description}</small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}