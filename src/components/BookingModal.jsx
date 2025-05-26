import React from 'react';
import styles from './bookingModal.module.css';

const BookingModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modalOverlay} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={`${styles.modalContent} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <h2>Book a Consultation</h2>
        <p>
          To schedule a consultation, please choose a method below or integrate your booking system here (e.g., Calendly embed).
        </p>
        <p>
          You can review our <a href="#services">service packages</a> or contact us directly to arrange a time.
        </p>
        <div className={styles.bookingOptions}>
          <a
            href="mailto:contact@kalyano.com?subject=Consultation%20Booking%20Request"
            className={styles.bookingButton}
          >
            Email Us to Book
          </a>
          <button
            onClick={() => {
              onClose();
              const contactForm = document.getElementById('contact');
              if (contactForm) contactForm.scrollIntoView({ behavior: 'smooth' });
            }}
            className={styles.bookingButton}
          >
            Fill Contact Form
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;