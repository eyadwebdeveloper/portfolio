import { useState } from 'react';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section/Section';
import ProjectPreview from '@/components/ui/ProjectPreview/ProjectPreview';
import ProjectRow from './ProjectRow';
import './Work.css';

export default function Work() {
  const [previewProject, setPreviewProject] = useState(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const showPreview = (project) => {
    setPreviewProject(project);
    setIsPreviewVisible(true);
  };

  return (
    <Section id="work" title="Selected work">
      <div className="project-list">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            onPreviewStart={showPreview}
            onPreviewEnd={() => setIsPreviewVisible(false)}
          />
        ))}
      </div>
      <ProjectPreview project={previewProject} isVisible={isPreviewVisible} />
    </Section>
  );
}
