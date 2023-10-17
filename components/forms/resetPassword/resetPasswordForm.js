'use client';
import styles from './resetPasswordForm.module.css';
import { useState } from 'react';
import Form from '@/components/forms/form';
import InputField from '@/components/inputs/inputField';
import SubmitButton from '@/components/buttons/submitButton';
import { validateEmail } from '@/components/inputs/helpers/validateEmail';
import { resetPassword } from './helpers/resetPassword';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import ResetPasswordSuccess from './resetPasswordSuccess';

export default function ResetPasswordForm({ initialEmail = '' }) {
  const router = useRouter();
  const supabase = createClientComponentClient();

  // STATE
  const [email, setEmail] = useState(initialEmail);
  const [error, setError] = useState(null);
  const [resetSuccess, setResetSuccess] = useState(false);

  // HANDLERS
  const handleEmailInput = (e) => setEmail(e.target.value);

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await validateEmail(email);
      await resetPassword(supabase, email);
      setError(null);
      setResetSuccess(true);
      router.refresh();
    } catch (error) {
      setError({ [error.type]: error.message });
    }
  };

  return (
    <>
      {!resetSuccess && (
        <Form className={styles['form-reset-password']} onSubmit={handleResetPassword}>
          <h1>Reset Password</h1>
          <InputField
            type="text"
            inputName="email"
            value={email}
            onChange={handleEmailInput}
            error={error?.email || error?.resetPassword}
            autoFocus={email !== ''}
          />
          <SubmitButton text="Reset Password" />
        </Form>
      )}
      {resetSuccess && <ResetPasswordSuccess email={email} />}
    </>
  );
}
