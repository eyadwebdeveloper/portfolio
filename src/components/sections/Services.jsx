import Reveal from "../Reveal";
import services from "../../data/services";

export default function Services() {
  return (
    <section id="services">
      <Reveal className="section-intro section-intro--narrow">
        <div className="section-eyebrow u-justify-center">What I Offer</div>
        <h2 className="section-title section-intro">
          My <em>Services</em>
        </h2>
      </Reveal>
      <div className="services-grid">
        {services.map((service, i) => (
          <Reveal as="div" key={service.title} delay={i + 1} className="service-card">
            <div className="service-card-number">{service.number}</div>
            <span className="service-card-icon">{service.icon}</span>
            <div className="service-card-title">{service.title}</div>
            <p className="service-card-description">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
