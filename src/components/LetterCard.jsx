import { useLetterModal } from "./modals/LetterModalContext";

export default function LetterCard({ letter }) {
  const { openModal } = useLetterModal();

  return (
    <article className="letter-card">
      <div className="letter-card-top">
        <div className="letter-card-org-badge">
          <img
            src={letter.orgLogo}
            alt=""
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <span className="letter-card-org-fallback" style={{ display: "none" }}>
            {letter.orgFallback}
          </span>
        </div>
        <span className="letter-card-org-name">{letter.org}</span>
      </div>
      <div className="letter-card-preview" style={{ backgroundImage: `url('${letter.preview}')` }}>
        <div className="letter-card-preview-fallback">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </div>
        <div className="letter-card-preview-scrim" />
      </div>
      <div className="letter-card-body">
        <div className="letter-card-name">{letter.name}</div>
        <div className="letter-card-title">{letter.title}</div>
        <button type="button" className="letter-card-view-btn" onClick={() => openModal(letter)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          View Letter
        </button>
      </div>
    </article>
  );
}