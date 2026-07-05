import { useRef } from "react";
import Reveal from "../Reveal";
import AnimatedCounter from "../AnimatedCounter";
import LaptopIllustration from "../LaptopIllustration";
import useTypewriter from "../../hooks/useTypewriter";
import useMagnetic from "../../hooks/useMagnetic";
import useRipple from "../../hooks/useRipple";
import useNameShimmer from "../../hooks/useNameShimmer";

const ROLES = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "React Developer",
  "Performance Engineer",
  "Open Source Builder",
];

export default function Hero() {
  const role = useTypewriter(ROLES);
  const primaryBtnRef = useRef(null);
  const outlineBtnRef = useRef(null);
  const nameRef = useRef(null);
  useMagnetic(primaryBtnRef);
  useMagnetic(outlineBtnRef);
  useRipple(primaryBtnRef);
  useNameShimmer(nameRef);

  return (
    <section id="hero">
      <div className="hero-background-number">01</div>
      <Reveal className="hero-wrapper">
        <div className="hero-left">
          <div className="availability-badge">
            <span className="availability-dot" />
            Available for new projects
          </div>
          <h1 className="hero-name">
            <span className="hero-name-greeting">Hi, I'm</span>
            <span className="hero-name-highlight" ref={nameRef}>
              Eyad Ashraf
            </span>
          </h1>
          <div className="hero-role">
            <span>{role}</span>
            <span className="hero-role-cursor" />
          </div>
          <p className="hero-bio">
            I build <b>fast, beautiful web experiences</b> where every pixel has purpose and every interaction feels
            effortless. From idea to deployment — I do it all.
          </p>
          <div className="hero-buttons">
            <a ref={primaryBtnRef} href="#projects" className="btn-primary">
              View My Work
            </a>
            <a ref={outlineBtnRef} href="/cv-eyad-ashraf.pdf" className="btn-outline" download>
              Download CV
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <AnimatedCounter target={9} />
              <div className="hero-stat-label">Projects Done</div>
            </div>
            <div className="hero-stat">
              <AnimatedCounter target={3} />
              <div className="hero-stat-label">Years Exp.</div>
            </div>
            <div className="hero-stat">
              <AnimatedCounter target={100} />
              <div className="hero-stat-label">% Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-chip code-chip-1">&lt;dev /&gt;</div>
          <div className="code-chip code-chip-2">const build = () =&gt; 🚀</div>
          <div className="code-chip code-chip-3">npm run dev</div>
          <LaptopIllustration />
        </div>
      </Reveal>
    </section>
  );
}
