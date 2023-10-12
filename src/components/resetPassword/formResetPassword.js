import { useState } from 'react';
import Form from '../ui/form';
import EmailInput from '../ui/inputs/emailInput';
import PasswordInput from '../ui/inputs/passwordInput';
import SubmitButton from '../ui/buttons/submitButton';
import { supabase } from '../../supabase/supabaseClient';
import { CustomError } from '../../errors/customError';

export default function FormResetPassword({ setShowResetPasswordModal }) {
  // STATE
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  // HANDLERS
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmitResetPassword = async (e) => {
    e.preventDefault();

    try {
      // TODO need email and password validation here again
      const { data, error } = await supabase.auth.updateUser({
        email: email,
        password: password,
      });

      if (error) throw new CustomError('updateUser', error.message);
      setError(null);
      setShowResetPasswordModal(false);
      // TODO after reset, user automatically logged in. they should be directed to password reset page first (to update their new password)
    } catch (error) {
      console.log('--ERROR: ', error);
      setError({ [error.type]: error.message });
    }
  };

  return (
    <Form onSubmit={handleSubmitResetPassword}>
      <EmailInput onChange={handleEmailInput} value={email} />
      <PasswordInput
        onChange={handlePasswordInput}
        value={password}
        error={error?.password}
      />
      <SubmitButton text="Reset Password" />
      {error && <div>{`Error to handle: ${error?.updateUser}`}</div>}
    </Form>
  );
}
