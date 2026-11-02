import { useEffect, useRef, useState } from 'react';
import './VideoModal.css';

/**
 * Accessible video dialog built on the native <dialog> element
 * (focus trapping, Esc to close and inert background come for free).
 * The <video> is only mounted while open, so nothing downloads until requested.
 */
export default function VideoModal({ isOpen, onClose, videoSrc, eyebrow, title, description, footerLink }) {
  const dialogRef = useRef(null);
  const [playerState, setPlayerState] = useState('loading'); // 'loading' | 'ready' | 'error'

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialog.open) {
      setPlayerState('loading');
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = ''; };
  }, [isOpen]);

  const closeOnBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="video-modal"
      aria-labelledby="video-modal-title"
      onClose={onClose}
      onClick={closeOnBackdropClick}
    >
      {isOpen && (
        <>
          <header className="video-modal__header">
            <div>
              {eyebrow && <p className="video-modal__eyebrow">{eyebrow}</p>}
              <h3 id="video-modal-title" className="video-modal__title">{title}</h3>
              {description && <p className="video-modal__description">{description}</p>}
            </div>
            <button type="button" className="video-modal__close" onClick={onClose} aria-label="Close video">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="video-modal__player">
            <video
              className="video-modal__video"
              src={videoSrc}
              controls
              autoPlay
              playsInline
              preload="metadata"
              onCanPlay={() => setPlayerState('ready')}
              onError={() => setPlayerState('error')}
            />
            {playerState === 'loading' && <span className="video-modal__spinner" role="status" aria-label="Loading video" />}
            {playerState === 'error' && <p className="video-modal__error" role="alert">The video could not be loaded. Please try again later.</p>}
          </div>

          {footerLink && (
            <footer className="video-modal__footer">
              <a href={footerLink.href}>{footerLink.label} →</a>
            </footer>
          )}
        </>
      )}
    </dialog>
  );
}
