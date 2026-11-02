import LinkList from '@/components/ui/LinkList/LinkList';
import './ProjectRow.css';

export default function ProjectRow({ project, onPreviewStart, onPreviewEnd }) {
  return (
    <article
      className="project-row"
      onPointerEnter={() => onPreviewStart(project)}
      onPointerLeave={onPreviewEnd}
    >
      <h3><a href={project.url}>{project.title}</a></h3>
      <span className="project-row__meta">
        {project.category}
        <small>{project.caption}</small>
      </span>
      <p>
        {project.description}
        <span className="project-row__stack">{project.techStack.join(', ')}</span>
      </p>
      <LinkList links={project.links} />
    </article>
  );
}
