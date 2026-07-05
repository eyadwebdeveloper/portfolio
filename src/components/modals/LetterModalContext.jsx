import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const LetterModalContext = createContext(null);

export function LetterModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [letter, setLetter] = useState(null);
  const [status, setStatus] = useState("loading"); // 'loading' | 'ready'
  const timerRef = useRef(null);

  const openModal = useCallback((letterData) => {
    setLetter(letterData);
    setStatus("loading");
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    if (timerRef.current) clearTimeout(timerRef.current);
    // Mirrors the original fixed 2s "loading" delay before revealing the
    // embedded PDF iframe (masks the perceptibly-slow first paint of the
    // browser's native PDF viewer).
    timerRef.current = setTimeout(() => {
      setStatus("ready");
      timerRef.current = null;
    }, 2000);
  }, []);

  const closeModal = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  const value = useMemo(
    () => ({ isOpen, letter, status, openModal, closeModal }),
    [isOpen, letter, status, openModal, closeModal]
  );

  return <LetterModalContext.Provider value={value}>{children}</LetterModalContext.Provider>;
}

export function useLetterModal() {
  const ctx = useContext(LetterModalContext);
  if (!ctx) throw new Error("useLetterModal must be used within a LetterModalProvider");
  return ctx;
}
