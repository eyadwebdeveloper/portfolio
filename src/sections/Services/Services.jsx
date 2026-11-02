import { services } from '@/data/services';
import Section from '@/components/ui/Section/Section';
import './Services.css';

export default function Services() {
  return (
    <Section id="services" title="What I can do for you">
      <div className="service-grid">
        {services.map(({ title, description }) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
