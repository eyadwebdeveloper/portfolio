import LinkList from '@/components/ui/LinkList/LinkList';
import './OrganizationCard.css';

export default function OrganizationCard({ organization, onWatchDemo }) {
  const {
    logo,
    logoWidth,
    logoHeight,
    shortName,
    fullName,
    summary,
    deliverables,
    techStack,
    links,
    demo,
  } = organization;

  return (
    <article className="org-card">
      {/* width/height are the file's intrinsic size; CSS still sets the shown size.
          They let the browser reserve the right space before the logo loads. */}
      <img
        className="org-card__logo"
        src={logo}
        alt=""
        width={logoWidth}
        height={logoHeight}
      />
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