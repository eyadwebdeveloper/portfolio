import { useEffect, useState } from "react";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hidden ? "is-hidden" : ""}>
      <div className="loader-name" data-text="EYAD">
        EYAD
      </div>
      <div className="loader-track">
        <div className="loader-fill" />
      </div>
      <div className="loader-label">Loading portfolio</div>
    </div>
  );
}
