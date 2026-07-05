import { useEffect, useRef } from "react";

/**
 * Generic scroll-reveal wrapper. Replaces the original
 * `document.querySelectorAll('.reveal,.reveal-left,.reveal-right')` +
 * IntersectionObserver pattern with a self-contained component so any
 * section can opt in without a global querySelector pass.
 *
 * variant: "reveal" | "reveal-left" | "reveal-right"
 * delay:   1-5 (maps to the existing `.delay-N` CSS classes)
 */
export default function Reveal({ as: Tag = "div", variant = "reveal", delay, className = "", children, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [variant, delay ? `delay-${delay}` : "", className].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
