import Reveal from "../Reveal";
import CaseStudyCard from "../CaseStudyCard";
import collaborations from "../../data/collaborations";

export default function Collaborations() {
  return (
    <section id="collabs">
      <Reveal className="projects-header">
        <div>
          <div className="section-eyebrow">Long-Term Partnerships</div>
          <h2 className="section-title">
            Organization <em>Collaborations</em>
          </h2>
          <div className="section-rule" />
        </div>
      </Reveal>
      <Reveal as="p" delay={1} className="collab-intro">
        Some of my most substantial work has come from ongoing collaboration rather than one-off freelance jobs —
        building and maintaining internal systems for two organizations across multiple seasons, not just shipping a
        single deliverable and moving on.
      </Reveal>

      <div className="collab-case-list" id="collabCases">
        {collaborations.map((collab, index) => (
          <Reveal key={collab.id} variant="reveal" delay={Math.min((index % 3) + 1, 5)}>
            <CaseStudyCard collab={collab} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}