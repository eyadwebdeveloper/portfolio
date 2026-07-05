import { useEffect, useRef } from "react";

const HOVER_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, summary, [onclick], [tabindex]:not([tabindex="-1"])';

// Desktop-only custom cursor: a trailing caret + code brackets that snap
// together into a "select" state over interactive elements. Mirrors the
// original script's easing loop and delegated hover listeners, scoped to a
// single effect that cleans itself up on unmount.
export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (!el || isTouchDevice) return undefined;

    document.documentElement.classList.add("has-custom-cursor");

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    let curTX = centerX;
    let curTY = centerY;
    let curX = centerX;
    let curY = centerY;
    let rafId;

    el.style.opacity = "1";

    const onMouseMove = (e) => {
      curTX = e.clientX;
      curTY = e.clientY;
    };
    const onMouseLeave = () => {
      el.style.opacity = "0";
    };
    const onMouseEnter = () => {
      el.style.opacity = "1";
    };
    const onMouseOver = (e) => {
      if (e.target.closest(HOVER_SELECTOR)) {
        document.documentElement.classList.add("is-pointer");
      }
    };
    const onMouseOut = (e) => {
      const related = e.relatedTarget;
      if (e.target.closest(HOVER_SELECTOR) && !(related && related.closest && related.closest(HOVER_SELECTOR))) {
        document.documentElement.classList.remove("is-pointer");
      }
    };

    function loop() {
      curX += (curTX - curX) * 0.35;
      curY += (curTY - curY) * 0.35;
      el.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      rafId = requestAnimationFrame(loop);
    }

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor", "is-pointer");
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div id="cur" ref={cursorRef} aria-hidden="true" style={{ opacity: 0 }}>
      <span className="cursor-caret" />
      <span className="cursor-bracket cursor-bracket-left">&lt;</span>
      <span className="cursor-bracket cursor-bracket-right">/&gt;</span>
    </div>
  );
}
