import { useEffect, useState } from "react";

// Types/deletes each role in `words` in a loop, matching the original
// hero-role typewriter timing (85ms type / 42ms delete / 1200ms hold).
export default function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 42, holdTime = 1200 } = {}) {
  const [text, setText] = useState("");

  useEffect(() => {
    let ri = 0;
    let ci = 0;
    let deleting = false;
    let timer;

    function tick() {
      const word = words[ri];
      setText(deleting ? word.slice(0, ci--) : word.slice(0, ci++));

      if (!deleting && ci > word.length) {
        deleting = true;
        timer = setTimeout(tick, holdTime);
        return;
      }
      if (deleting && ci < 0) {
        deleting = false;
        ri = (ri + 1) % words.length;
        ci = 0;
      }
      timer = setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    tick();
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return text;
}
