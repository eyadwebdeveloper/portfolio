import { useEffect } from 'react';
import { pointer } from '@/lib/pointer';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

const POINTER_IDLE_MS = 2500;
const MIN_WEIGHT = 230;
const WEIGHT_RANGE = 570;

/**
 * Letters swell in weight and colour around the pointer.
 * When the pointer is idle (or on touch devices) a slow sweep runs instead.
 */
export function useHeroWave(titleRef) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const title = titleRef.current;
    if (!title || prefersReducedMotion) return undefined;

    const letters = [...title.querySelectorAll('.hero__letter')];
    let frameId;

    const animate = (time) => {
      const titleBounds = title.getBoundingClientRect();
      if (titleBounds.bottom > 0) {
        const isPointerActive = time - pointer.lastMovedAt < POINTER_IDLE_MS;
        const sweepX = titleBounds.left + (Math.sin(time / 1700) * 0.5 + 0.5) * titleBounds.width;

        letters.forEach((letter) => {
          const bounds = letter.getBoundingClientRect();
          const centerX = bounds.left + bounds.width / 2;
          const centerY = bounds.top + bounds.height / 2;
          const focusX = isPointerActive ? pointer.x : sweepX;
          const focusY = isPointerActive ? pointer.y : centerY;
          const distance = Math.hypot(centerX - focusX, (centerY - focusY) * 0.55);
          const influence = Math.exp(-((distance / (titleBounds.width * 0.17)) ** 2));

          letter.style.fontVariationSettings = `"wght" ${Math.round(MIN_WEIGHT + WEIGHT_RANGE * influence)}`;
          letter.style.color = `color-mix(in srgb, var(--acc) ${Math.round(influence * 100)}%, var(--ink))`;
        });
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [titleRef, prefersReducedMotion]);
}
