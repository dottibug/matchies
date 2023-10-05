import Button from '../ui/button';
import styles from './home.module.css';
import CreateAccount from '../createAccount/createAccount';

export default function Home({ setGameSettings }) {
  // HANDLERS
  const handleClickQuickGame = () => setGameSettings(true);

  const handleClickLogin = () => {
    console.log('-- login');
  };

  return (
    <div className={styles['user-options']}>
      <Button onClick={handleClickQuickGame}>Quick Game</Button>
      <Button onClick={handleClickLogin}>Login</Button>
      <CreateAccount />
    </div>
  );
}
