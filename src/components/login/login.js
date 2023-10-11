import { useState } from 'react';
import Modal from '../ui/modal/modal';
import Button from '../ui/button';
import { supabase } from '../../supabase/supabaseClient';
import FormLogin from './formLogin';

export default function Login({ session }) {
  // STATE
  const [showLoginModal, setShowLoginModal] = useState(false);

  // HANDLERS
  const handleCloseLoginModal = () => setShowLoginModal(false);

  const handleClickLogin = async () => setShowLoginModal(true);

  const handleClickLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw Error(error);
    } catch (error) {
      console.log(`⛔️ ERROR logging out: ${error}`);
    }
  };

  console.log('session: ', session);

  return (
    <>
      {!session && <Button onClick={handleClickLogin}>Login</Button>}
      {session && <Button onClick={handleClickLogout}>Logout</Button>}
      {showLoginModal && (
        <Modal closeModal={handleCloseLoginModal}>
          <FormLogin setShowLoginModal={setShowLoginModal} />
        </Modal>
      )}
    </>
  );
}
