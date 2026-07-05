import { useEffect } from "react";

// Attaches the "magnetic" hover-follow effect used on primary CTA buttons.
export default function useMagnetic(ref) {
  useEffect(() => {
    const btn = ref.current;
    if (!btn) return undefined;

    const onMouseMove = (e) => {
      const r = btn.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.3;
      const y = (e.clientY - r.top - r.height / 2) * 0.3;
      btn.style.transform = `translate(${x}px,${y}px)`;
    };
    const onMouseLeave = () => {
      btn.style.transform = "";
    };

    btn.addEventListener("mousemove", onMouseMove);
    btn.addEventListener("mouseleave", onMouseLeave);
    return () => {
      btn.removeEventListener("mousemove", onMouseMove);
      btn.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref]);
}
