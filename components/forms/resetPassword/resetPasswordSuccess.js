import styles from './resetPasswordSuccess.module.css';
import Image from 'next/image';
import emailIcon from './assets/email.png';

// TODO Reset password insp: https://www.google.com/search?q=reset+password+email&sca_esv=573801698&tbm=isch&sxsrf=AM9HkKkcpmJ3MmP49sppeUFkQ7NfcpsgjA:1697472641309&source=lnms&sa=X&sqi=2&ved=2ahUKEwjKhrSu-vqBAxUPODQIHdQvB4AQ_AUoAXoECAIQAw&biw=1188&bih=715&dpr=2#imgrc=pfyaz19sg3PiLM

export default function ResetPasswordSuccess({ email }) {
  return (
    <div className={styles['reset-password-success']}>
      <Image src={emailIcon} alt="Email icon" width={100} height={100} quality={100} />
      <p className={styles['success-message']}>
        <span>An email has been sent to </span>
        <span className={styles['email']}>{email}</span>
        <span>. Click the reset link provided in the email to update your password.</span>
      </p>
    </div>
  );
}
