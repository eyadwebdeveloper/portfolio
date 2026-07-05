import Reveal from "../Reveal";
import LetterCard from "../LetterCard";
import letters from "../../data/letters";

export default function Letters() {
  return (
    <section id="testi">
      <Reveal className="section-intro">
        <div className="section-eyebrow u-justify-center">Proof, Not Promises</div>
        <h2 className="section-title section-intro">
          Recommendation <em>Letters</em>
        </h2>
        <p className="section-subtitle">
          Official letters from the people I've worked with directly — not curated quotes, the real documents.
        </p>
      </Reveal>

      <div className="letters-grid">
        {letters.map((letter, index) => (
          <Reveal key={letter.id} variant="reveal" delay={Math.min((index % 3) + 1, 5)}>
            <LetterCard letter={letter} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}