import { useEffect, useRef } from 'react';
import './ScrollProgress.css';

/** Thin bar showing how far down the page the visitor is. Updated via ref to avoid re-renders. */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      barRef.current.style.width = `${progress * 100}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <i ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
