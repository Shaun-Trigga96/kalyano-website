import React from 'react';
import styles from './footer.module.css';
import kalyanoLogo from '/src/assets/kalyano-logo.jpg';
import visionLogo from '../assets/vision-logo.jpg';

const Footer = ({ theme }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
  ];

  return (
    <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className={styles.logoContainer}
            >
              <img src={kalyanoLogo} alt="KALYANO Logo" className={styles.logoImage} />
            </a>
            <p className={styles.description}>
              Young, talented content creators specializing in AMAPIANO culture and video mix production.
            </p>
            <img src={visionLogo} alt="Cape Visions Studios Logo" className={styles.visionLogoFooter} />
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Quick Links</h3>
            <div className={styles.links}>
              {footerNavItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={styles.link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactInfo}>
              <p>📞 067 681 7119</p>
              <p>📞 068 247 6726</p>
              <p>📧 capevisionsstudios@gmail.com</p>
              <p>📧 thandosiloyi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2025 KALYANO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;