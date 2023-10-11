import styles from './input.module.css';

export default function EmailInput({
  value,
  onChange,
  placeholder = 'Enter email',
  customClass,
  ...props
}) {
  return (
    <div className={customClass || styles['input']}>
      <label htmlFor="email" className={styles['sr-only']}>
        Email
      </label>
      <input
        className={styles['input-field']}
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
