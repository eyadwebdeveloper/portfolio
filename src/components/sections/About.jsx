import Reveal from "../Reveal";
import SkillBar from "../SkillBar";
import { skillBars, techStackGroups, aboutStats } from "../../data/about";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">
        <Reveal variant="reveal-left">
          <div className="section-eyebrow">Who I Am</div>
          <h2 className="section-title">
            About <em>Me</em>
          </h2>
          <div className="section-rule" />
          <p className="about-bio">
            I'm a <b>full-stack web developer</b> from Cairo with 3+ years of experience turning complex ideas into
            clean, high-performance digital products — from PHP/Laravel backends to ReactJS front ends, with a
            security-conscious approach to every build. I care deeply about code quality, user experience, and
            shipping things that actually work beautifully.
          </p>
          <div id="skillBars">
            <div className="skills-title">Core Skills</div>
            {skillBars.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} />
            ))}
          </div>
          <div className="tech-stack">
            {techStackGroups.map((group) => (
              <div className="tech-stack-group" key={group.label}>
                <div className="tech-stack-label">{group.label}</div>
                <div className="tech-stack-tags">
                  {group.tags.map((tag) => (
                    <span className="tech-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal variant="reveal-right" className="about-visual">
          <div className="about-stat-cards">
            {aboutStats.map((stat, i) => (
              <Reveal as="div" key={stat.label} delay={i + 1} className="about-stat-card">
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </Reveal>
            ))}
          </div>
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dot terminal-dot-red" />
              <div className="terminal-dot terminal-dot-yellow" />
              <div className="terminal-dot terminal-dot-green" />
              <span className="terminal-title">~/eyad/profile.json</span>
            </div>
            <div className="terminal-body">
              <span className="terminal-prompt">❯</span> <span className="terminal-command">cat profile.json</span>
              <br />
              {"{"}
              <br />
              &nbsp;&nbsp;<span className="terminal-key">"name"</span>:{" "}
              <span className="terminal-value">"Eyad Ashraf"</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"role"</span>:{" "}
              <span className="terminal-value">"Full Stack Developer"</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"location"</span>:{" "}
              <span className="terminal-value">"Cairo, Egypt"</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"experience"</span>:{" "}
              <span className="terminal-value">"3+ years"</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"stack"</span>: [
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-value">"PHP"</span>,{" "}
              <span className="terminal-value">"Laravel"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-value">"ReactJS"</span>,{" "}
              <span className="terminal-value">"TypeScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="terminal-value">"MySQL"</span>
              <br />
              &nbsp;&nbsp;],
              <br />
              &nbsp;&nbsp;<span className="terminal-key">"security_focus"</span>:{" "}
              <span className="terminal-value">"SQLi prevention"</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"open_to_work"</span>:{" "}
              <span className="terminal-value terminal-value-success">true</span>,<br />
              &nbsp;&nbsp;<span className="terminal-key">"coffee_count"</span>:{" "}
              <span className="terminal-value terminal-value-warning">∞</span>
              <br />
              {"}"}
              <br />
              <span className="terminal-prompt">❯</span> <span className="terminal-cursor" />
            </div>
          </div>
          <div className="about-visual-tag">⬡ 3D Model Slot #1 — Laptop / Code Sphere</div>
        </Reveal>
      </div>
    </section>
  );
}
