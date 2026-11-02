import { useCallback, useEffect, useRef, useState } from 'react';

const RESET_DELAY_MS = 2200;

/** `status` is 'idle' | 'copied' | 'failed' and resets itself after a short delay. */
export function useCopyToClipboard(text) {
  const [status, setStatus] = useState('idle');
  const resetTimerRef = useRef();

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => setStatus('idle'), RESET_DELAY_MS);
  }, [text]);

  useEffect(() => () => clearTimeout(resetTimerRef.current), []);
  return { status, copy };
}
