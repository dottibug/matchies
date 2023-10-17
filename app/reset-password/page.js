'use client';
import styles from './resetPassword.module.css';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Form from '@/components/forms/form';
import InputField from '@/components/inputs/inputField';
import SubmitButton from '@/components/buttons/submitButton';
import { handleUpdatePassword } from './helpers/handleUpdatePassword';
import { validatePassword } from '@/components/inputs/helpers/validatePassword';

export default function ResetPassword() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  // STATE
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // HANDLERS
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmitPassword = async (e) => {
    e.preventDefault();
    console.log('-- UPDATE USER PASSWORD');

    try {
      await validatePassword(password);
      await handleUpdatePassword(supabase, password);
      router.push('http://localhost:3000/my-account');
    } catch (error) {
      setError({ [error.type]: error.message });
    }
  };

  // TODO ERRORS:
  // AuthSessionMissingError: Auth session missing!

  return (
    <>
      <Form
        onSubmit={handleSubmitPassword}
        className={styles['form-reset-password-page']}>
        <h1>Update Password</h1>
        <InputField
          type="password"
          inputName="password"
          value={password}
          onChange={handlePasswordInput}
          error={error?.password}
        />
        <SubmitButton text="Update Password" />
      </Form>
    </>
  );
}
