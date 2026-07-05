import { useEffect } from "react";

// 3D tilt-on-hover effect used on project cards.
export default function useTilt(ref) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return undefined;

    const onMouseMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `translateY(-6px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
      card.style.transition = "transform .05s";
    };
    const onMouseLeave = () => {
      card.style.transform = "";
      card.style.transition = "transform .35s cubic-bezier(.16,1,.3,1)";
    };

    card.addEventListener("mousemove", onMouseMove);
    card.addEventListener("mouseleave", onMouseLeave);
    return () => {
      card.removeEventListener("mousemove", onMouseMove);
      card.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [ref]);
}
