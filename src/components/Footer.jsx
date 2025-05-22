import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import kalyanoLogo from '/src/assets/kalyano-logo.jpg'; // Assuming your logo is here

// Footer Component
const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.column}>
        <Link to="/" className={styles.logoContainer}>
            <img src={kalyanoLogo} alt="KALYANO Logo" className={styles.logoImage} />
          </Link>          <p className={styles.description}>
            Young, talented content creators specializing in AMAPIANO culture and video mix production.
          </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Quick Links</h3>
          <div className={styles.links}>
            <Link to="/" className={styles.link}>Home</Link>
            <Link to="/about" className={styles.link}>About</Link>
            <Link to="/services" className={styles.link}>Services</Link>
            <Link to="/portfolio" className={styles.link}>Portfolio</Link>
          </div>
        </div>
        <div className={styles.column}>
          <h3 className={styles.heading}>Contact</h3>
          <div className={styles.contactInfo}>
            <p>📞 067 681 7119</p>
            <p>📞 068 247 6726</p>
            <p>📧 contact@kalyano.com</p>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2025 KALYANO. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;