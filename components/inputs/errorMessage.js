import styles from './inputErrorMessage.module.css';
import Image from 'next/image';
import warning from './assets/warning.png';

export default function InputErrorMessage({ children }) {
  return (
    <div className={styles['input-error-message']}>
      <Image src={warning.src} alt="Warning symbol" width={18} height={18} />
      {children}
    </div>
  );
}
