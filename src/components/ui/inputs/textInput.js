import styles from './input.module.css';

export default function TextInput({
  value,
  onChange,
  inputName,
  placeholder = `Enter ${inputName.toLowerCase()}`,
  customClass,
  error,
  ...props
}) {
  return (
    <div className={customClass || styles['input']}>
      <label htmlFor="inputName" className={styles['sr-only']}>
        {inputName}
      </label>
      <input
        className={styles['input-field']}
        type="text"
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
