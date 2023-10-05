import Button from '../ui/button';
import styles from './home.module.css';

export default function Home({ setGameSettings }) {
  // HANDLERS
  const handleClickQuickGame = () => {
    console.log('-- quick game');
    setGameSettings(true);
  };

  const handleClickLogin = () => console.log('-- login');
  const handleClickCreateAccount = () => console.log('-- create account');

  return (
    <div className={styles['user-options']}>
      <Button onClick={handleClickQuickGame}>Quick Game</Button>
      <Button onClick={handleClickLogin}>Login</Button>
      <Button onClick={handleClickCreateAccount}>Create Account</Button>
    </div>
  );
}
