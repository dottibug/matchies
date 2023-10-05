import styles from './createAccount.module.css';
import { useState } from 'react';
import Button from '../ui/button';
import Modal from '../ui/modal/modal';

export default function CreateAccount() {
  // STATE
  const [showAccountModal, setShowAccountModal] = useState(false);

  // HANDLERS
  const handleClickCreateAccount = () => setShowAccountModal(true);
  const handleCloseAccountModal = () => setShowAccountModal(false);

  return (
    <>
      <Button onClick={handleClickCreateAccount}>Create Account</Button>
      {showAccountModal && (
        <Modal closeModal={handleCloseAccountModal}>create account modal</Modal>
      )}
    </>
  );
}
