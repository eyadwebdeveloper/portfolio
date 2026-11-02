import { useEffect, useRef, useState } from 'react';

const VIEWPORT_ANCHOR = 0.8;
const VIEWPORT_TRAVEL = 0.25;

/** Paragraph whose words light up one by one as it scrolls through the viewport. */
export default function ScrollFillText({ text, className }) {
  const paragraphRef = useRef(null);
  const words = text.trim().split(' ');
  const [activeWordCount, setActiveWordCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const { top, height } = paragraphRef.current.getBoundingClientRect();
      const rawProgress = (window.innerHeight * VIEWPORT_ANCHOR - top) / (height + window.innerHeight * VIEWPORT_TRAVEL);
      const progress = Math.min(1, Math.max(0, rawProgress));
      setActiveWordCount(Math.ceil(progress * words.length));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [words.length]);

  return (
    <p ref={paragraphRef} className={className}>
      {words.map((word, index) => (
        <span key={index}>
          <span className={index < activeWordCount ? 'about__word is-active' : 'about__word'}>{word}</span>
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </p>
  );
}
