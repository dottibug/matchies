'use client';
import styles from './button.module.css';

/**
 * Button component.
 * @param {string} type - Button type, can be 'button', 'submit', or 'reset'. Default is 'button'.
 * @param {string} variant - Button variant, can be 'solid' or 'outline'. Default is 'solid'.
 * @param {string} color - Button color scheme, can be 'primary' or 'accent'. Default is 'primary'.
 * @param {string} size - Button size, can be 'small', 'medium', or 'large'. Default is 'medium'.
 * @param {string} width - Button width, can be any string denoting width, such as '30rem' or '100px'. Default is 'auto'.
 * @param {Function} onClick - Function to call when the button is clicked.
 * @param {string} value - Value of the button (optional).
 * @param {boolean} disabled - Whether the button is disabled. Default is false.
 * @param {ReactNode} children - The content of the button.
 * @returns {ReactNode} Button component.
 */
export default function Button({
  type = 'button',
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  width = 'auto',
  onClick,
  value = '',
  disabled = false,
  children,
  ...props
}) {
  const buttonClasses = [
    styles['button'],
    styles[variant],
    styles[color],
    styles[size],
  ].join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      style={{ width }}
      onClick={onClick}
      value={value}
      disabled={disabled}
      {...props}>
      {children || 'Button'}
    </button>
  );
}
