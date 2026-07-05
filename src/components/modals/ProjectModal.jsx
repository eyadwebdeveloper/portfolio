import { useEffect } from "react";
import { useProjectModal } from "./ProjectModalContext";

export default function ProjectModal() {
  const { isOpen, video, closeModal, project } = useProjectModal();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  return (
    <div
      className={`project-modal-overlay${isOpen ? " is-open" : ""}`}
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="project-modal" role="dialog" aria-modal="true" aria-labelledby="projModalTitle">
        <button className="project-modal-close" aria-label="Close project preview" onClick={closeModal}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="project-modal-media">
          {video ? (
            <video key={video} controls playsInline autoPlay style={{ display: "block" }}>
              <source src={video} type="video/mp4" />
              Your browser doesn't support embedded video.
            </video>
          ) : (
            <div className="project-modal-media-placeholder">
              <span className="project-modal-video-icon">🎬</span>
              <span>Demo video coming soon</span>
            </div>
          )}
        </div>
        <div className="project-modal-body">
          <h3 className="project-modal-title" id="projModalTitle">
            {project.title}
          </h3>
          <p className="project-modal-description">{project.description}</p>
          <div className="project-modal-features">
            <div className="project-modal-features-label">Key Features</div>
            <ul className="project-modal-features-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="project-modal-tech">
            {project.tech.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
