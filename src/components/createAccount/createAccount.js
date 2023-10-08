import styles from './createAccount.module.css';
import { useState } from 'react';
import Button from '../ui/button';
import Modal from '../ui/modal/modal';
import FormCreateAccount from './formCreateAccount';

export default function CreateAccount() {
  // STATE
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [tempAccounts, setTempAccounts] = useState([]);

  // HANDLERS
  const handleClickCreateAccount = () => setShowAccountModal(true);
  const handleCloseAccountModal = () => setShowAccountModal(false);

  // username
  // password
  // submit

  return (
    <>
      <Button onClick={handleClickCreateAccount}>Create Account</Button>
      {showAccountModal && (
        <Modal closeModal={handleCloseAccountModal}>
          <FormCreateAccount />
        </Modal>
      )}
    </>
  );
}
