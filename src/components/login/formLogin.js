import styles from './login.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Form from '../ui/form';
import EmailInput from '../ui/inputs/emailInput';
import PasswordInput from '../ui/inputs/passwordInput';
import SubmitButton from '../ui/buttons/submitButton';
import { CustomError } from '../../errors/customError';

export default function FormLogin({ setShowLoginModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // HANDLERS
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error)
        throw new CustomError(
          'login',
          `${error.message}. Check for typos or reset your password below.`
        );

      setError(null);
      setShowLoginModal(false);
    } catch (error) {
      setError({ [error.type]: error.message });
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  // TODO error handling for resetting password
  const handleResetPassword = async () => {
    console.log('-- RESET PASSWORD');
    try {
      // Sends the user a log in link via email. Once logged in you should direct the user to a new password form. And use "Update User" below to save the new password.
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:3000/',
      });

      if (error) throw new CustomError('resetPassword', error.message);
      setError(null);
    } catch (error) {
      console.log('--ERROR: ', error);
      setError({ [error.type]: error.message });
    }
  };

  // TODO errors to handle:
  // Password recovery requires an email
  // Unable to validate email address: invalid format
  // doesnt' seem to be an error for if the email can't be found. Set that up

  return (
    <Form onSubmit={handleSubmitLogin}>
      <EmailInput onChange={handleEmailInput} value={email} />
      <PasswordInput
        onChange={handlePasswordInput}
        value={password}
        error={error?.login}
      />
      <SubmitButton text="Login" />
      {/* PASSWORD RESET BUTTON */}
      <button onClick={handleResetPassword} type="button">
        Reset password
      </button>
    </Form>
  );
}
