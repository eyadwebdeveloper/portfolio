import { useEffect } from "react";

const COLORS = ["#22D3EE", "#8B5CF6", "#D8B4FE", "#6D28D9", "#4ADE80", "#F472B6", "#FCD34D", "#38BDF8"];

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

// Firework-style particle burst on every click, plus an expanding ring.
// Purely decorative — renders nothing itself, just wires a document listener.
export default function ClickSparks() {
  useEffect(() => {
    function createSpark(x, y) {
      const count = 14;
      for (let i = 0; i < count; i++) {
        const el = document.createElement("span");
        el.style.cssText = `
          position:fixed;pointer-events:none;z-index:999999;
          left:${x}px;top:${y}px;
          width:${rand(3, 7)}px;height:${rand(3, 7)}px;
          border-radius:50%;
          background:${COLORS[Math.floor(Math.random() * COLORS.length)]};
          box-shadow:0 0 6px currentColor;
          transform:translate(-50%,-50%);
          will-change:transform,opacity;
        `;
        document.body.appendChild(el);
        const angle = rand(0, Math.PI * 2);
        const dist = rand(40, 110);
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        const dur = rand(480, 760);
        el.animate(
          [
            { transform: "translate(-50%,-50%) translate(0,0) scale(1)", opacity: 1 },
            { transform: `translate(-50%,-50%) translate(${tx}px,${ty}px) scale(0)`, opacity: 0 },
          ],
          { duration: dur, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
        ).onfinish = () => el.remove();
      }
      const ring = document.createElement("span");
      ring.style.cssText = `
        position:fixed;pointer-events:none;z-index:999998;
        left:${x}px;top:${y}px;
        width:6px;height:6px;border-radius:50%;
        border:2px solid rgba(34,211,238,0.8);
        transform:translate(-50%,-50%);
        will-change:transform,opacity;
      `;
      document.body.appendChild(ring);
      ring.animate(
        [
          { transform: "translate(-50%,-50%) scale(1)", opacity: 0.9 },
          { transform: "translate(-50%,-50%) scale(8)", opacity: 0 },
        ],
        { duration: 520, easing: "ease-out", fill: "forwards" }
      ).onfinish = () => ring.remove();
    }

    const onClick = (e) => createSpark(e.clientX, e.clientY);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
