import styles from './createAccount.module.css';
import { useState } from 'react';
import TextInput from '../ui/inputs/textInput';
import EmailInput from '../ui/inputs/emailInput';
import PasswordInput from '../ui/inputs/passwordInput';
import Form from '../ui/form';
import SubmitButton from '../ui/buttons/submitButton';
import UserIconOptions from '../userIcons/userIconOptions';
import { createUserAccount } from '../../supabase/createUserAccount';
import Login from '../login/login';

export default function FormCreateAccount({ session }) {
  // STATE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState(null);
  const [error, setError] = useState(null);

  // HANDLERS
  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmitCreateAccount = async (e) => {
    e.preventDefault();

    try {
      await createUserAccount(username, email, password, userIcon);
      // Clear errors if account is successfully created
      setError(null);
    } catch (error) {
      setError({
        [error.type]: error.message,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmitCreateAccount}>
      <TextInput
        value={username}
        onChange={handleUsernameInput}
        inputName="Username"
        error={error?.username}
      />
      <EmailInput onChange={handleEmailInput} value={email} />
      <PasswordInput
        onChange={handlePasswordInput}
        value={password}
        error={error?.password}
      />
      <UserIconOptions userIcon={userIcon} setUserIcon={setUserIcon} />
      {(!error || error.username || error.password) && (
        <SubmitButton text="Create Account" />
      )}
      {error && error.supabase && (
        <div style={{ color: 'red' }}>
          <p>{error.supabase}</p>
          <Login session={session} />
          <button>TODO: Reset password</button>
        </div>
      )}
    </Form>
  );
}
