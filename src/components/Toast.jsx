import { useToast } from "./ToastContext";

export default function Toast() {
  const { isOpen, message, hideToast } = useToast();

  return (
    <div id="toast" className={isOpen ? "is-open" : ""}>
      <span className="toast-icon">✅</span>
      <span className="toast-message">{message}</span>
      <button className="toast-close" onClick={hideToast}>
        ✕
      </button>
    </div>
  );
}
