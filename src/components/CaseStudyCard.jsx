import { useProjectModal } from "./modals/ProjectModalContext";

export default function CaseStudyCard({ collab }) {
  const { openModal } = useProjectModal();

  return (
    <article className="case-study-card">
      <div className="case-study-header">
        <div className="case-study-org">
          <div className="case-study-org-logo" aria-hidden="true">
            <img
              src={collab.logo}
              alt=""
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <span className="case-study-org-logo-fallback" style={{ display: "none" }}>
              {collab.logoFallback}
            </span>
          </div>
          <div>
            <div className="case-study-org-name">
              {collab.org} <span className="case-study-org-subname">{collab.orgSubname}</span>
            </div>
            <div className="case-study-org-role">{collab.role}</div>
          </div>
        </div>
        <div className="case-study-duration">
          <span className="project-card-status-dot" />
          {collab.duration}
        </div>
      </div>
      <p className="case-study-summary">{collab.summary}</p>
      <div className="case-study-projects">
        {collab.projects.map((p) => (
          <div className="case-study-project" key={p.title}>
            <div className="case-study-project-icon">{p.icon}</div>
            <div className="case-study-project-body">
              <div className="case-study-project-title">{p.title}</div>
              <p className="case-study-project-description">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="case-study-footer">
        <div className="case-study-stack">
          {collab.stack.map((tag) => (
            <span className="project-card-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card-links">
          {collab.links.map((link) =>
            link.type === "video" ? (
              <button
                key={link.label}
                type="button"
                className="project-card-link project-card-link--button"
                onClick={() => openModal(link.video)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}