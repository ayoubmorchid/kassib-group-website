export default function SectionTitle({
  eyebrow,
  title,
  text,
  align = "start",
  light = false,
  as: Heading = "h2",
}) {
  const centered = align === "center";

  return (
    <div className={`section-title ${centered ? "text-center mx-auto" : ""}`}>
      {eyebrow && (
        <div className={`section-eyebrow ${centered ? "justify-content-center" : ""}`}>
          <span />
          {eyebrow}
        </div>
      )}
      <Heading className={light ? "text-white" : ""}>{title}</Heading>
      {text && <p className={light ? "text-white-65" : ""}>{text}</p>}
    </div>
  );
}
