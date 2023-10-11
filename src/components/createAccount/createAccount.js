import styles from './createAccount.module.css';
import { useState } from 'react';
import Button from '../ui/button';
import Modal from '../ui/modal/modal';
import FormCreateAccount from './formCreateAccount';

export default function CreateAccount({ session }) {
  // STATE
  const [showAccountModal, setShowAccountModal] = useState(false);

  // HANDLERS
  const handleClickCreateAccount = () => setShowAccountModal(true);
  const handleCloseAccountModal = () => setShowAccountModal(false);

  // username
  // password
  // submit

  /* 
  supabase
  create user 

  username
  icon
  decks
  games_played

  */

  return (
    <>
      <Button onClick={handleClickCreateAccount}>Create Account</Button>
      {showAccountModal && (
        <Modal closeModal={handleCloseAccountModal}>
          <FormCreateAccount session={session} />
        </Modal>
      )}
    </>
  );
}
