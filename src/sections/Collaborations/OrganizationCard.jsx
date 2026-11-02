import LinkList from '@/components/ui/LinkList/LinkList';
import './OrganizationCard.css';

export default function OrganizationCard({ organization, onWatchDemo }) {
  const { logo, shortName, fullName, summary, deliverables, techStack, links, demo } = organization;

  return (
    <article className="org-card">
      <img className="org-card__logo" src={logo} alt="" />
      <h3>{shortName}</h3>
      <p className="org-card__role">{fullName}</p>
      <p className="org-card__summary">{summary}</p>
      <ul>
        {deliverables.map(({ title, description }) => (
          <li key={title}>
            <b>{title}</b>
            <span>{description}</span>
          </li>
        ))}
      </ul>
      <p className="org-card__stack">{techStack.join(', ')}</p>
      <LinkList links={links}>
        {demo && <button type="button" onClick={() => onWatchDemo(demo)}>Watch the platform demo</button>}
      </LinkList>
    </article>
  );
}
