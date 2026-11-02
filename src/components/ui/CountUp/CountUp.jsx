import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const STEPS = 40;
const STEP_DURATION_MS = 30;

/** Counts from 0 to `target` (ease-out) the first time it scrolls into view. */
export default function CountUp({ target, suffix = '' }) {
  const elementRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      setValue(target);
      return undefined;
    }
    let intervalId;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let step = 0;
      intervalId = setInterval(() => {
        step += 1;
        setValue(Math.round(target * (1 - (1 - step / STEPS) ** 3)));
        if (step >= STEPS) clearInterval(intervalId);
      }, STEP_DURATION_MS);
    });
    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [target, prefersReducedMotion]);

  return (
    <b ref={elementRef}>
      <em>{value}</em>
      {suffix}
    </b>
  );
}
