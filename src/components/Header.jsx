import React, { useState, useEffect } from 'react';
import styles from './header.module.css';
import kalyanoLogo from '/src/assets/kalyano-logo.jpg';
import { Menu, Home, Info, ListMusic, Youtube, Mail, Sun, Moon } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <Info size={20} /> },
    { id: 'services', label: 'Services', icon: <ListMusic size={20} /> },
    { id: 'portfolio', label: 'Portfolio', icon: <Youtube size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navItems.map((item) => document.getElementById(item.id));

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => sections.forEach((section) => {
      if (section) observer.unobserve(section);
    });
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
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

          <nav className={styles.desktopNav}>
            {navItems.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.navLink} ${activeSection === id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {React.cloneElement(icon, { className: styles.navIcon })}
                <span>{label}</span>
              </a>
            ))}
          </nav>

          <div className={styles.themeToggleContainer}>
            <button
              className={styles.themeToggleButton}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={24} className={styles.themeIcon} />
              ) : (
                <Sun size={24} className={styles.themeIcon} />
              )}
            </button>
          </div>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            aria-controls="mobileNavMenu"
            aria-label="Toggle navigation menu"
          >
            <Menu className={styles.mobileMenuIcon} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className={styles.mobileNav} id="mobileNavMenu">
            {navItems.map(({ id, label, icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`${styles.mobileNavLink} ${activeSection === id ? styles.active : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(id);
                }}
              >
                {React.cloneElement(icon, { className: styles.navIcon })}
                <span>{label}</span>
              </a>
            ))}
            <button
              className={styles.mobileThemeToggleButton}
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={24} className={styles.themeIcon} />
              ) : (
                <Sun size={24} className={styles.themeIcon} />
              )}
              <span>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;