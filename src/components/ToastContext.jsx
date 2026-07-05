import { createContext, useCallback, useContext, useMemo, useRef, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Message sent successfully!");
  const timerRef = useRef(null);

  const showToast = useCallback((msg) => {
    setMessage(msg || "Message sent successfully!");
    setIsOpen(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsOpen(false), 5000);
  }, []);

  const hideToast = useCallback(() => {
    setIsOpen(false);
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const value = useMemo(() => ({ isOpen, message, showToast, hideToast }), [isOpen, message, showToast, hideToast]);

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
