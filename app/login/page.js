'use client';
import styles from './login.module.css';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Form from '@/components/forms/form';
import InputField from '@/components/inputs/inputField';
import { validateEmail } from '@/components/inputs/helpers/validateEmail';
import { handleUserLogin } from './helpers/handleUserLogin';
import InputErrorMessage from '@/components/inputs/errorMessage';
import Modal from '@/components/modal/modal';
import ResetPasswordForm from '@/components/forms/resetPassword/resetPasswordForm';
import Button from '@/components/buttons/button';

export default function Login() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  // STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  // HANDLERS
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await validateEmail(email);
      await handleUserLogin(supabase, email, password);
      console.log('-- LOGIN SUCCESSFUL -- ');
      router.push('http://localhost:3000');
    } catch (error) {
      // Example error: { login: 'error message' }
      setError({ [error.type]: error.message });
    }
  };

  const handleForgotPassword = () => setShowResetPasswordModal(true);

  // TODO handle supabase errors

  // TODO on successful login, route user to home page

  return (
    <>
      <Form className={styles['form-login']} onSubmit={handleLogin}>
        <h1>Login</h1>
        <InputField
          type="text"
          inputName="email"
          value={email}
          onChange={handleEmailInput}
          error={error?.email}
        />
        <InputField
          type="password"
          inputName="password"
          value={password}
          onChange={handlePasswordInput}
        />
        {error?.login && (
          <InputErrorMessage>
            <div className={styles['login-error-message']}>
              <p className={styles['error-text']}>
                Oops! Your email or password is incorrect.
              </p>
              <p
                onClick={handleForgotPassword}
                className={styles['forgot-password-text']}>
                FORGOT PASSWORD?
              </p>
            </div>
          </InputErrorMessage>
        )}
        <Button type="submit" width="30rem">
          Login
        </Button>
        <Button onClick={handleForgotPassword} color="accent" width="30rem">
          Forgot Password
        </Button>
      </Form>
      {showResetPasswordModal && (
        <Modal closeModal={() => setShowResetPasswordModal(false)}>
          <ResetPasswordForm initialEmail={email} />
        </Modal>
      )}
    </>
  );
}
