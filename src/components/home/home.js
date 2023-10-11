import Button from '../ui/button';
import styles from './home.module.css';
import CreateAccount from '../createAccount/createAccount';
import { supabase } from '../../supabase/supabaseClient';
import { useState } from 'react';
import Login from '../login/login';

export default function Home({ setGameSettings, session }) {
  // HANDLERS
  const handleClickQuickGame = () => setGameSettings(true);

  // const handleClickLogin = async () => {
  //   console.log('-- login');
  //   setShowLogin(true);

  //   //     const { data, error } = await supabase.auth.signInWithPassword({
  //   //   email: 'someone@email.com',
  //   //   password: 'HUwGdpDnxavlZYxbnXlI'
  //   // })
  // };

  // const handleClickLogout = async () => {
  //   console.log('-- logout');

  //   try {
  //     const { error } = await supabase.auth.signOut();
  //     if (error) throw Error(error);
  //   } catch (error) {
  //     console.log(`⛔️ ERROR logging out: ${error}`);
  //   }
  // };

  // console.log('session: ', session);

  return (
    <div className={styles['user-options']}>
      <Button onClick={handleClickQuickGame}>Quick Game</Button>
      {/* {!session && <Button onClick={handleClickLogin}>Login</Button>}
      {session && <Button onClick={handleClickLogout}>Logout</Button>} */}
      <Login session={session} />
      <CreateAccount />
    </div>
  );
}
