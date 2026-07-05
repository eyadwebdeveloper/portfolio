import { useEffect } from "react";

// Hover shimmer/glow effect on the hero name highlight.
export default function useNameShimmer(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.style.transition = "filter .4s ease, letter-spacing .4s cubic-bezier(.23,1,.32,1)";

    const onEnter = () => {
      el.style.filter =
        "brightness(1.3) drop-shadow(0 0 18px rgba(34,211,238,0.55)) drop-shadow(0 0 38px rgba(139,92,246,0.35))";
      el.style.letterSpacing = "3px";
    };
    const onLeave = () => {
      el.style.filter = "";
      el.style.letterSpacing = "";
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [ref]);
}
