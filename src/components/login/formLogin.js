import styles from './login.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';

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
    <form onSubmit={handleSubmitLogin} className={styles['form']}>
      <div className={styles['input']}>
        <label htmlFor="email">Email</label>
        <input onChange={handleEmailInput} value={email} name="email" type="email" />
      </div>
      <div className={styles['input']}>
        <label htmlFor="password">Password</label>
        <input
          onChange={handlePasswordInput}
          value={password}
          name="password"
          type="password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
