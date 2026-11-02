/** Inline input that grows with its content so it reads as part of the sentence around it. */
export default function SentenceInput({ value, placeholder, ...props }) {
  const widthInCharacters = Math.max(value.length, placeholder.length) + 1;
  return (
    <input
      value={value}
      placeholder={placeholder}
      style={{ width: `${widthInCharacters}ch` }}
      required
      {...props}
    />
  );
}
