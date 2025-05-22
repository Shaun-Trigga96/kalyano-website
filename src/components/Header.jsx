import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.css';
import kalyanoLogo from '/src/assets/kalyano-logo.jpg'; // Assuming your logo is here
import { Menu, Home, Info, ListMusic, Youtube, Mail } from 'lucide-react'; // Removed unused: Share2, Filter, BotMessageSquare, Newspaper

// Header Component
const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={20} /> }, // Adjust size as needed
    { path: '/about', label: 'About', icon: <Info size={20} /> },
    { path: '/services', label: 'Services', icon: <ListMusic size={20} /> },
    { path: '/portfolio', label: 'Portfolio', icon: <Youtube size={20} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={20} /> }
  ];
  // Note: Share2, Filter, BotMessageSquare, Newspaper were imported but not used in the current nav structure.
  // You can add them if you have corresponding sections.

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Logo */}
          <Link to="/" className={styles.logoContainer}>
            <img src={kalyanoLogo} alt="KALYANO Logo" className={styles.logoImage} />
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`${styles.navLink} ${isActive(path) ? styles.active : ''}`}
              >
                {React.cloneElement(icon, { className: styles.navIcon })} 
                {/* Cloning to add className for specific icon styling if needed via CSS modules */}
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobileNavMenu"
            aria-label="Toggle navigation menu"
          >
            <Menu className={styles.mobileMenuIcon} size={24} /> {/* Using Lucide Menu icon */}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav} id="mobileNavMenu">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`${styles.mobileNavLink} ${isActive(path) ? styles.active : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {React.cloneElement(icon, { className: styles.navIcon })}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;