import { skillGroups, stats } from '@/data/skillGroups';
import Section from '@/components/ui/Section/Section';
import CountUp from '@/components/ui/CountUp/CountUp';
import ScrollFillText from './ScrollFillText';
import './About.css';

const STATEMENT =
  'I’m a full-stack developer who builds web products for organizations: secure, fast, and still easy to maintain two seasons later. PHP and Laravel behind the scenes, React in front, and security checked at every step.';

export default function About() {
  return (
    <Section id="about" title="About">
      <ScrollFillText className="about__statement" text={STATEMENT} />
      <p className="about__bio">
        From PHP and Laravel back ends to ReactJS front ends, with a security-conscious approach to every build. I care deeply about code quality, user experience, and shipping things that actually work beautifully.
      </p>
      <div className="stats">
        {stats.map(({ label, value, suffix }) => (
          <div key={label}>
            <CountUp target={value} suffix={suffix} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="skills">
        {skillGroups.map(({ title, skills }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul>
              {skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
