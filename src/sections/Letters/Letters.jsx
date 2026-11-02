import { letters } from '@/data/letters';
import Section from '@/components/ui/Section/Section';
import './Letters.css';

export default function Letters() {
  return (
    <Section
      id="letters"
      title="In their words"
      subtitle="Recommendation letters from the people I worked with, as the original documents."
    >
      <div className="letter-grid">
        {letters.map(({ id, author, role, excerpt, pdfUrl, previewImage, previewAlt }) => (
          <a key={id} href={pdfUrl} target="_blank" rel="noopener">
            <img src={previewImage} alt={previewAlt} loading="lazy" />
            <b>{author}</b>
            <span>{role}</span>
            <span className="letter-card__quote">{excerpt}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
