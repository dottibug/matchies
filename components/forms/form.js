export default function Form({ onSubmit, className, children }) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}
