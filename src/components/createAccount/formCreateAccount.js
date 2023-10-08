import styles from './createAccount.module.css';
import { useState } from 'react';

/* 

user = {
    username: 'abcdef',
    icon: image or string?, 
    gamesPlayed: 0, 
}
*/

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

export default function FormCreateAccount() {
  // STATE
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userIcon, setUserIcon] = useState(null);

  const [tempUsers, setTempUsers] = useState([]);

  // HANDLERS
  const handleUsernameInput = (e) => setUsername(e.target.value);

  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleClickIcon = (e) => setUserIcon(e.target.value);

  const handleSubmitCreateAccount = (e) => {
    e.preventDefault();

    const icon = userIcon || selectRandomIcon();

    const newUser = { username, icon: icon, gamesPlayed: 0 };

    setTempUsers((tempUsers) => [...tempUsers, newUser]);
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
