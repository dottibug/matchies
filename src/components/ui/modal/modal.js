import styles from './modal.module.css';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ closeModal, children }) {
  // STATE
  const [showModal, setShowModal] = useState(false);

  // Disable scrolling when modal open
  useEffect(() => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';

    return () => {
      setShowModal(false);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Close modal on 'Escape' keypress
  useEffect(() => {
    const handlePressEscape = (e) => {
      if (e.code !== 'Escape') return;
      closeModal();
    };

    document.addEventListener('keydown', handlePressEscape);

    return () => document.removeEventListener('keydown', handlePressEscape);
  }, [closeModal]);

  const modal = (
    <div className={styles['backdrop']} onClick={closeModal}>
      <div className={styles['modal']}>
        <button onClick={closeModal} className={styles['btn-close-modal']}>
          &#215;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );

  if (!showModal) return;
  if (showModal) return createPortal(modal, document.getElementById('modal'));
}
