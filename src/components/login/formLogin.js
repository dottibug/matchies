import styles from './login.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import Form from '../ui/form';
import EmailInput from '../ui/inputs/emailInput';
import PasswordInput from '../ui/inputs/passwordInput';
import SubmitButton from '../ui/buttons/submitButton';

export default function FormLogin({ setShowLoginModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // HANDLERS
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    console.log('-- LOGIN ');

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) throw Error(error);
      console.log('-- LOGGED IN AS: ', data.user.email);
      setShowLoginModal(false);
    } catch (error) {
      console.log(`⛔️ ERROR logging in: ${error}`);
    }
  };

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  return (
    <Form onSubmit={handleSubmitLogin}>
      <EmailInput onChange={handleEmailInput} value={email} />
      <PasswordInput onChange={handlePasswordInput} value={password} />
      <SubmitButton text="Login" />
    </Form>
  );
}
