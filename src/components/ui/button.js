import styles from './button.module.css';

export default function Button({ onClick, value, disabled = false, style, children }) {
  return (
    <button
      className={styles['button']}
      onClick={onClick}
      value={value}
      disabled={disabled}
      style={style}>
      {children}
    </button>
  );
}
