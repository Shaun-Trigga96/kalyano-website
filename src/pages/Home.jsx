import React from 'react';
import styles from './home.module.css';
import kalyanoLogo from '/src/assets/kalyano-logo.jpg';

const HomePageContent = ({ theme }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className={`${styles.pageContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <div className={styles.logoBox}>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className={styles.logoLink}
              >
                <img src={kalyanoLogo} alt="KALYANO Logo" className={styles.logoImage} />
              </a>
            </div>
          </div>
          <h1 className={styles.heroTitle}>
            KULTURE + <span className={styles.heroTitleHighlight}>AMAPIANO</span>
          </h1>
          <p className={styles.heroDescription}>
            KALYANO MIX is a premier video production company specializing in AMAPIANO music videos. We bring your vision to life with stunning visuals and a deep understanding of the AMAPIANO culture.
          </p>
          <div className={styles.heroButtons}>
            <a
              href="#services"
              className={styles.primaryButton}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
            >
              View Services
            </a>
            <a
              href="#portfolio"
              className={styles.secondaryButton}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('portfolio');
              }}
            >
              Watch Portfolio
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.featuresTitle}>Why Choose KALYANO?</h2>
          <div className={styles.featuresGrid}>
            {[
              {
                title: 'Professional Quality',
                description: 'High-quality video production with cinematic color grading and professional editing',
                icon: '🎬',
              },
              {
                title: 'AMAPIANO Expertise',
                description: 'Deep understanding of AMAPIANO culture and music, ensuring authentic representation',
                icon: '🎵',
              },
              {
                title: 'Fast Turnaround',
                description: 'Quick delivery options available, with rush delivery in just 48 hours',
                icon: '⚡',
              },
            ].map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePageContent;