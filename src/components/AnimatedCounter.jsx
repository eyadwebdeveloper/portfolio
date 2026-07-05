import { useEffect, useRef, useState } from "react";

// Counts up from 0 to `target` once the element scrolls into view, mirroring
// the original runC()/IntersectionObserver behavior (26ms tick, 50 steps).
export default function AnimatedCounter({ target, suffix = "+" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const step = target / 50;
            let current = 0;
            const interval = setInterval(() => {
              current = Math.min(current + step, target);
              setValue(Math.floor(current));
              if (current >= target) clearInterval(interval);
            }, 26);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="hero-stat-number" ref={ref}>
      {value}
      {target === 100 ? "%" : suffix}
    </div>
  );
}
