import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, label';

/** Dot that follows the pointer and grows over interactive elements. Hidden on touch devices via CSS. */
export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const handlePointerMove = (event) => {
      cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    const handlePointerOver = (event) => {
      cursor.classList.toggle('is-hovering', Boolean(event.target.closest?.(INTERACTIVE_SELECTOR)));
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerover', handlePointerOver);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerOver);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
