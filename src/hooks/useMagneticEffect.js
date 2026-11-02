import { useEffect } from 'react';

const HORIZONTAL_PULL = 0.2;
const VERTICAL_PULL = 0.3;

/** Nudges the element toward the pointer while it hovers over it. */
export function useMagneticEffect(elementRef, isEnabled) {
  useEffect(() => {
    const element = elementRef.current;
    if (!element || !isEnabled) return undefined;

    const handlePointerMove = (event) => {
      const bounds = element.getBoundingClientRect();
      const offsetX = (event.clientX - bounds.left - bounds.width / 2) * HORIZONTAL_PULL;
      const offsetY = (event.clientY - bounds.top - bounds.height / 2) * VERTICAL_PULL;
      element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    };
    const reset = () => { element.style.transform = ''; };

    element.addEventListener('pointermove', handlePointerMove);
    element.addEventListener('pointerleave', reset);
    return () => {
      element.removeEventListener('pointermove', handlePointerMove);
      element.removeEventListener('pointerleave', reset);
    };
  }, [elementRef, isEnabled]);
}
