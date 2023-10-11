import styles from './createAccount.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { icons } from '../../icons/userIcons';
import TextInput from '../ui/inputs/textInput';
import EmailInput from '../ui/inputs/emailInput';
import PasswordInput from '../ui/inputs/passwordInput';
import Form from '../ui/form';
import SubmitButton from '../ui/buttons/submitButton';
import UserIconOptions from '../userIcons/userIconOptions';

// HELPERS
function selectRandomIcon() {
  const randomNum = Math.floor(Math.random() * icons.length);
  return icons[randomNum].name;
}

export default function FormCreateAccount({ session }) {
  // STATE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState(null);

  // HANDLERS
  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmitCreateAccount = async (e) => {
    e.preventDefault();

    // make sure username input meets requirements (isn't blank and certain length)
    // make sure the password input meeets requirements
    // const newUser = { username, icon: icon, gamesPlayed: 0 };

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw Error(error);

      const {
        user: { id },
      } = data;

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            user_uid: id,
            email: email,
            username: username,
            icon: userIcon || selectRandomIcon(),
            games_played: 0,
            decks_unlocked: ['ocean', 'camping', 'sweets'],
          },
        ])
        .select();

      if (profileError) throw Error(profileError);
      console.log('profile data: ', profileData);
    } catch (error) {
      // ERRORS TO HANDLE
      // supabase password error: password should be at least 6 characters
      console.log('supabase error: ', error);
    }
  };

  return (
    <Form onSubmit={handleSubmitCreateAccount}>
      <TextInput value={username} onChange={handleUsernameInput} inputName="Username" />
      <EmailInput onChange={handleEmailInput} value={email} />
      <PasswordInput onChange={handlePasswordInput} value={password} />
      <UserIconOptions userIcon={userIcon} setUserIcon={setUserIcon} />
      <SubmitButton text="Create Account" />
    </Form>
  );
}
