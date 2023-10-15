export default function SubmitButton({ text, disabled = false }) {
  return (
    <button type="submit" disabled={disabled}>
      {text}
    </button>
  );
}
