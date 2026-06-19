export default function Card({
  as: Component = "article",
  className = "",
  children,
  ...props
}) {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}
