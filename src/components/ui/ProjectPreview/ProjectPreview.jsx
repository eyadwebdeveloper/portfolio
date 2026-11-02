import { useEffect, useRef } from 'react';
import { projects } from '@/data/projects';
import { pointer } from '@/lib/pointer';
import { classNames } from '@/lib/classNames';
import './ProjectPreview.css';

const FOLLOW_EASING = 0.14;
const OFFSET_X = 28;
const OFFSET_Y = -70;

/**
 * Floating thumbnail that trails the pointer while a project row is hovered.
 *
 * Every project image is rendered up front (stacked, only the current one
 * visible) so they all download on page load. Swapping a single <img> src on
 * hover made the browser fetch the next image on demand, which is slow in
 * production and left the previous screenshot on screen until it finished.
 */
export default function ProjectPreview({ project, isVisible }) {
  const previewRef = useRef(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let frameId;
    const follow = () => {
      x += (pointer.x - x) * FOLLOW_EASING;
      y += (pointer.y - y) * FOLLOW_EASING;
      previewRef.current.style.transform = `translate(${x + OFFSET_X}px, ${y + OFFSET_Y}px)`;
      frameId = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div
      ref={previewRef}
      className={classNames('project-preview', isVisible && 'is-active')}
      data-title={project?.previewLabel}
      aria-hidden="true"
    >
      {projects.map((item) => (
        <img
          key={item.id}
          className={classNames(
            'project-preview__img',
            project?.id === item.id && 'is-current',
          )}
          src={item.previewImage}
          alt=""
          decoding="async"
          fetchPriority="low"
        />
      ))}
    </div>
  );
}