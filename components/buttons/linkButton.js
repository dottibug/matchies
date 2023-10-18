'use client';
import styles from './button.module.css';
import Link from 'next/link';

/**
 * Link component styled as a button.
 * @param {string} variant - Button variant, can be 'solid' or 'outline'. Default is 'solid'.
 * @param {string} color - Button color scheme, can be 'primary' or 'accent'. Default is 'primary'.
 * @param {string} size - Button size, can be 'small', 'medium', or 'large'. Default is 'medium'.
 * @param {string} width - Button width, can be any string denoting width, such as '30rem' or '100px'. Default is 'auto'.
 * @param {string} href - The URL that the button will link to. External URLs must start with 'http' or 'https'.
 * @param {boolean} appRoute - Use true for application routing. Use false for external URLs. Default is false.
 * @param {ReactNode} children - The content of the button.
 *
 * @returns {ReactElement} Link element styled as a button.
 */
export default function LinkButton({
  variant = 'solid',
  color = 'primary',
  size = 'medium',
  width = 'auto',
  href,
  appRoute = false,
  children,
}) {
  const buttonClasses = [
    styles['button'],
    styles[variant],
    styles[color],
    styles[size],
  ].join(' ');

  return (
    <>
      {appRoute && (
        <Link className={buttonClasses} style={{ width }} href={href}>
          {children || 'Link'}
        </Link>
      )}
      {!appRoute && (
        <a className={buttonClasses} style={{ width }} href={href} target="_blank">
          {children || 'Link'}
        </a>
      )}
    </>
  );
}
