import { useEffect } from "react";

// Material-style click ripple, used on the primary/send buttons. Injects the
// keyframes once per app lifetime (guarded by a data attribute on <head>).
export default function useRipple(ref) {
  useEffect(() => {
    if (!document.getElementById("ripple-keyframes")) {
      const style = document.createElement("style");
      style.id = "ripple-keyframes";
      style.textContent = "@keyframes rippleOut{to{transform:scale(28);opacity:0}}";
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    const btn = ref.current;
    if (!btn) return undefined;

    const onClick = (e) => {
      const r = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position:absolute;border-radius:50%;
        background:rgba(255,255,255,0.25);
        width:10px;height:10px;
        left:${e.clientX - r.left - 5}px;top:${e.clientY - r.top - 5}px;
        pointer-events:none;z-index:10;
        animation:rippleOut .6s ease-out forwards;
      `;
      btn.style.overflow = "hidden";
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, [ref]);
}
