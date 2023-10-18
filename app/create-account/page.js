'use client';
import styles from './createAccount.module.css';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import Form from '@/components/forms/form';
import InputField from '@/components/inputs/inputField';
import UserIconOptions from '@/components/userIconOptions/userIconOptions';
import { handleUserSignUp } from './helpers/handleUserSignUp';
import { handleUserProfileCreation } from './helpers/handleUserProfileCreation';
import { validateUsername } from '@/components/inputs/helpers/validateUsername';
import { validateEmail } from '@/components/inputs/helpers/validateEmail';
import { validatePassword } from '@/components/inputs/helpers/validatePassword';
import Button from '@/components/buttons/button';
/*
errors to handle
1. SUPABASE ERROR:  User already registered
*/

export default function CreateAccount() {
  const router = useRouter();
  const supabase = createClientComponentClient();

  // STATE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [error, setError] = useState(null);

  // HANDLERS
  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    console.log('-- CREATE USER ACCOUNT --');
    try {
      await validateUsername(username);
      await validateEmail(email);
      await validatePassword(password);

      const signUpData = await handleUserSignUp(supabase, email, password);

      await handleUserProfileCreation(
        supabase,
        signUpData,
        username,
        email,
        selectedIcon
      );

      console.log('-- SIGN UP AND PROFILE UPDATE SUCCESSFUL -- ');

      router.refresh();
    } catch (error) {
      // Example error: { username: 'Username must be at least 4 characters long.' }
      setError({ [error.type]: error.message });
    }
  };

  // TODO Handle supabase errors
  // if user already registered, error modal that says "Oops! That user is already registered. Would you like to sign in?" and show a login form in the modal, as well as a "forgot password" option

  return (
    <Form
      className={styles['form-create-account']}
      onSubmit={handleCreateAccount}
      title="Create Account">
      <InputField
        type="text"
        inputName="Username"
        value={username}
        onChange={handleUsernameInput}
        error={error?.username}
      />
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
        error={error?.password}
      />
      <UserIconOptions selectedIcon={selectedIcon} setSelectedIcon={setSelectedIcon} />
      <Button type="submit" width="24rem">
        Create Account
      </Button>
    </Form>
  );
}
