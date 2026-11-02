import { useEffect, useState } from 'react';

/** True once the page has been scrolled past `thresholdPx`. */
export function useScrollThreshold(thresholdPx) {
  const [isPast, setIsPast] = useState(false);
  useEffect(() => {
    const update = () => setIsPast(window.scrollY > thresholdPx);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [thresholdPx]);
  return isPast;
}
