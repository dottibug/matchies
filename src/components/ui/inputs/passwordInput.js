import styles from './input.module.css';

export default function PasswordInput({
  value,
  onChange,
  placeholder = 'Enter password',
  customClass,
  error,
  ...props
}) {
  return (
    <div className={customClass || styles['input']}>
      <label className={styles['sr-only']} htmlFor="password">
        Password
      </label>
      <input
        className={styles['input-field']}
        type="password"
        name="password"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
