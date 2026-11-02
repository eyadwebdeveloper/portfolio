import './LinkList.css';

/** Underlined inline links. Extra actions (e.g. a <button>) can be passed as children. */
export default function LinkList({ links = [], children }) {
  return (
    <div className="link-list">
      {links.map(({ label, href }) => (
        <a key={href} href={href}>{label}</a>
      ))}
      {children}
    </div>
  );
}
