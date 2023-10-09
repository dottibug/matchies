import styles from './createAccount.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';

const tempUserIcons = [
  { name: 'A' },
  { name: 'B' },
  { name: 'C' },
  { name: 'D' },
  { name: 'E' },
  { name: 'F' },
  { name: 'G' },
  { name: 'H' },
  { name: 'I' },
  { name: 'J' },
  { name: 'K' },
  { name: 'L' },
];

export default function FormCreateAccount({ session }) {
  // STATE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState(null);

  const [tempUsers, setTempUsers] = useState([]);

  // HANDLERS
  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);
  const handleClickIcon = (e) => setUserIcon(e.target.value);

  // TODO trycatch
  const handleSubmitCreateAccount = async (e) => {
    e.preventDefault();
    const icon = userIcon || selectRandomIcon();
    // const newUser = { username, icon: icon, gamesPlayed: 0 };
    // setTempUsers((tempUsers) => [...tempUsers, newUser]);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) throw Error(error);

      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .insert([
          {
            email: email,
            username: username,
            icon: icon,
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

  // HELPERS
  function selectRandomIcon() {
    const numIcons = tempUserIcons.length;
    const randomNum = Math.floor(Math.random() * numIcons);
    return tempUserIcons[randomNum].name;
  }

  // STYLE
  const tempIconStyle = {
    borderRadius: '50%',
    height: '6rem',
    width: '6rem',
    border: 'none',
    backgroundColor: 'cadetblue',
    fontSize: '4rem',
    color: 'white',
  };

  return (
    <form onSubmit={handleSubmitCreateAccount} className={styles['form']}>
      <div className={styles['input']}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleUsernameInput}
          value={username}
          name="username"
          type="text"
        />
      </div>
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
          type="text"
        />
      </div>
      <div className={styles['select-user-icon']}>
        <label htmlFor="user-icon">User Icon</label>
        <div className={styles['user-icon-options']}>
          {tempUserIcons.map((icon) => (
            <button
              onClick={handleClickIcon}
              key={icon.name}
              name="user-icon"
              style={tempIconStyle}>
              {icon.name}
            </button>
          ))}
        </div>
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}
