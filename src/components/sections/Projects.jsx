import { useEffect } from "react";
import Reveal from "../Reveal";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  // Handle reveal animations for project cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all project cards
    document.querySelectorAll('.projects-grid .project-card-wrapper').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects">
      <Reveal className="projects-header">
        <div>
          <div className="section-eyebrow">Portfolio</div>
          <h2 className="section-title">
            My <em>Work</em>
          </h2>
          <div className="section-rule" />
        </div>
      </Reveal>

      <div className="projects-grid" id="bentoGrid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card-wrapper reveal delay-${Math.min((index % 5) + 1, 5)} ${project.span}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}