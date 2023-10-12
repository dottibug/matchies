import Button from '../ui/button';
import styles from './home.module.css';
import CreateAccount from '../createAccount/createAccount';
import { supabase } from '../../supabase/supabaseClient';
import { useState } from 'react';
import Login from '../login/login';
import Modal from '../ui/modal/modal';
import FormResetPassword from '../resetPassword/formResetPassword';

export default function Home({ setGameSettings, session }) {
  const [showResetPasswordModal, setShowResetPasswordModal] = useState(false);

  // HANDLERS
  const handleClickQuickGame = () => setGameSettings(true);

  const handleClickResetPassword = () => setShowResetPasswordModal(true);

  const handleCloseResetPassword = () => setShowResetPasswordModal(false);

  return (
    <div className={styles['user-options']}>
      <Button onClick={handleClickQuickGame}>Quick Game</Button>
      <Login session={session} />
      <CreateAccount />
      <button onClick={handleClickResetPassword}>Reset Password</button>
      {showResetPasswordModal && (
        <Modal closeModal={handleCloseResetPassword}>
          <FormResetPassword setShowResetPasswordModal={setShowResetPasswordModal} />
        </Modal>
      )}
    </div>
  );
}
