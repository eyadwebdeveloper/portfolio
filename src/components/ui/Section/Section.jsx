import { classNames } from '@/lib/classNames';

export default function Section({ id, title, subtitle, className, children }) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className={classNames('section', className)} aria-labelledby={titleId}>
      <h2 id={titleId} className="section__title">{title}</h2>
      {subtitle && <p className="section__subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}
