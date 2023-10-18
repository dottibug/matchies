export default function Form({ onSubmit, className, title, children }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {title && <h1>{title}</h1>}
      {children}
    </form>
  );
}
