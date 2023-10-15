import styles from './input.module.css';
import InputErrorMessage from './errorMessage';

/**
 * InputField component for handling user input.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.value - The current value of the input field.
 * @param {Function} props.onChange - The function to handle changes to the input field.
 * @param {string} props.inputName - The name of the input field.
 * @param {string} [props.type] - The type of the input field (default is 'text').
 * @param {string} [props.placeholder] - The placeholder text for the input field.
 * @param {string} props.customClass - Custom CSS class for the input field.
 * @param {string} props.error - Error message to display for the input field.
 * @param {Object} props.props - Additional properties to pass to the input field.
 * @returns {JSX.Element} The InputField component.
 */
export default function InputField({
  value,
  onChange,
  inputName,
  type = 'text',
  placeholder = `Enter ${inputName.toLowerCase()}`,
  customClass,
  error,
  ...props
}) {
  const inputFieldClass = [styles['input-field'], error ? styles['error'] : ''].join(' ');

  return (
    <div className={customClass || styles['input']}>
      <label htmlFor={inputName} className={styles['sr-only']}>
        {inputName}
      </label>
      <input
        className={inputFieldClass}
        type={type}
        name={inputName}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </div>
  );
}
