import { useRef } from "react";
import useTilt from "../hooks/useTilt";

const ICONS = {
  demo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  ),
};

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  useTilt(cardRef);

  return (
    <div
      ref={cardRef}
      className="project-card"
    >
      <div className={`project-card-thumb project-card-thumb--${project.thumbHeight}`}>
        <div className={`project-card-thumb-bg ${project.thumbClass}`} />
        {project.featuredBadge && <div className="project-card-featured-badge">{project.featuredBadge}</div>}
        <div className="project-card-status">
          <span className="project-card-status-dot" />
          Live
        </div>
        <span className="project-card-thumb-icon">{project.icon}</span>
      </div>
      <div className="project-card-body">
        <div className="project-card-meta">
          <span className="project-card-category">{project.meta}</span>
          <span className="project-card-year">{project.year}</span>
        </div>
        <div className="project-card-title">{project.title}</div>
        <p className="project-card-description">{project.description}</p>
        <div className="project-card-stack">
          {project.stack.map((tag) => (
            <span className="project-card-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card-divider" />
        <div className="project-card-links">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card-link${link.type === "github" ? " project-card-link--github" : ""}`}
            >
              {ICONS[link.type]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}