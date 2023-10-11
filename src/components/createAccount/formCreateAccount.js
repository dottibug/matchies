import styles from './createAccount.module.css';
import { useState } from 'react';
import { supabase } from '../../supabase/supabaseClient';
import { icons } from '../../icons/userIcons';

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
  const handleClickIcon = (e) => setUserIcon(e.currentTarget.dataset.iconName);

  // TODO trycatch
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

  // STYLE
  const iconStyle = (iconName) => {
    return { backgroundColor: iconName === userIcon && 'cadetblue' };
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
          {icons.map((icon) => {
            return (
              <div
                key={icon.name}
                onClick={handleClickIcon}
                data-icon-name={icon.name}
                className={styles['icon-image-wrapper']}
                style={iconStyle(icon.name)}>
                <img className={styles['icon-image']} src={icon.image} alt={icon.name} />
              </div>
            );
          })}
        </div>
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
}
