import { useEffect } from "react";
import { useLetterModal } from "./LetterModalContext";

export default function LetterModal() {
  const { isOpen, letter, status, closeModal } = useLetterModal();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  const name = letter?.name || "Recommendation Letter";
  const title = letter?.title || "";
  const pdf = letter?.pdf || "";
  const downloadName = `${name.replace(/\s+/g, "-")}-Recommendation-Letter.pdf`;

  return (
    <div
      className={`letter-modal-overlay${isOpen ? " is-open" : ""}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="letter-modal" role="dialog" aria-modal="true" aria-labelledby="letterModalName">
        <div className="letter-modal-header">
          <div>
            <div className="letter-modal-name" id="letterModalName">
              {name}
            </div>
            <div className="letter-modal-title">{title}</div>
          </div>
          <div className="letter-modal-actions">
            <a className="letter-modal-download" href={pdf} download={downloadName}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download</span>
            </a>
            <button type="button" className="letter-modal-close" aria-label="Close letter" onClick={closeModal}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
        <div className="letter-modal-body">
          <div className="letter-modal-state letter-modal-loading" style={{ display: status === "loading" ? "flex" : "none" }}>
            <span className="letter-modal-spinner" aria-hidden="true" />
            <span>Loading letter…</span>
          </div>
          {isOpen && pdf && (
            <iframe
              key={pdf}
              className={`letter-modal-frame${status === "ready" ? " is-visible" : ""}`}
              title="Recommendation letter PDF"
              src={`${pdf}#toolbar=0&navpanes=0`}
              style={{ display: status === "ready" ? "block" : "none" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
