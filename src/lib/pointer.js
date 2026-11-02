/** Shared, mutable pointer state read by animation loops (avoids re-rendering React on every move). */
export const pointer = { x: -999, y: -999, lastMovedAt: -Infinity };

/** Registers the global pointer listener. Returns a cleanup function. */
export function trackPointer() {
  const handlePointerMove = (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.lastMovedAt = performance.now();
  };
  window.addEventListener('pointermove', handlePointerMove);
  return () => window.removeEventListener('pointermove', handlePointerMove);
}
