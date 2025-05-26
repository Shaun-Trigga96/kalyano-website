import React, { useState } from 'react';
import BookingModal from '../components/BookingModal';
import styles from './services.module.css';
import visionLogo from '../assets/vision-logo.jpg';

const ServicesSection = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="services" className={`${styles.pageContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Our Services</h1>

        <div className={styles.contentWrapper}>
          <div className={styles.serviceCard}>
            <div className={styles.headerSection}>
              <h2 className={styles.headerTitle}>CAPE VISIONS STUDIOS</h2>
              <img src={visionLogo} alt="Cape Visions Studios Logo" className={styles.headerLogo} />
              <div className={styles.headerSubtitle}>KALYANO GROUP</div>
              <p className={styles.headerDescription}>Cape Town Price List 2025</p>
            </div>

            <div className={styles.contentSection}>
              {/* Basic Package */}
              <div className={styles.packageSection}>
                <div className={styles.packageHeader}>
                  <div className={styles.packageTitleSection}>
                    <h3 className={styles.packageTitle}>Basic Video Mix</h3>
                    <div className={styles.packageSubtitle}>
                      Perfect for upcoming DJs and artists to get a professional visual for their mix.
                    </div>
                  </div>
                  <div className={styles.packagePriceSection}>
                    <span className={styles.packagePrice}>R1,400</span>
                    <div className={styles.packagePriceLabel}>one-time</div>
                  </div>
                </div>
                <div className={styles.packageContent}>
                  <ul className={styles.packageList}>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>⏱️</span>
                      <span>Up to 30 minutes mix length</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>✨</span>
                      <span>Standard transitions & effects</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🏷️</span>
                      <span>Logo overlay</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>💎</span>
                      <span>1080p HD Quality</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Standard Package */}
              <div className={styles.packageSection}>
                <div className={styles.popularBadge}>POPULAR</div>
                <div className={styles.packageHeader}>
                  <div className={styles.packageTitleSection}>
                    <h3 className={styles.packageTitle}>Standard Video Mix</h3>
                    <div className={styles.packageSubtitle}>
                      Our most popular package, offering a balance of quality and features.
                    </div>
                  </div>
                  <div className={styles.packagePriceSection}>
                    <span className={styles.packagePrice}>R3,000</span>
                    <div className={styles.packagePriceLabel}>one-time</div>
                  </div>
                </div>
                <div className={styles.packageContent}>
                  <ul className={styles.packageList}>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>⏱️</span>
                      <span>Up to 60 minutes mix length</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🎨</span>
                      <span>Custom transitions & effects</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🎬</span>
                      <span>Animated logo overlay</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🎞️</span>
                      <span>Intro/Outro graphics</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>💎</span>
                      <span>4K UHD Quality option</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Premium Package */}
              <div className={styles.packageSection}>
                <div className={styles.premiumBadge}>PREMIUM</div>
                <div className={styles.packageHeader}>
                  <div className={styles.packageTitleSection}>
                    <h3 className={styles.packageTitle}>Premium Video Mix</h3>
                    <div className={styles.packageSubtitle}>
                      For established artists seeking top-tier visuals and extensive customization.
                    </div>
                  </div>
                  <div className={styles.packagePriceSection}>
                    <span className={styles.packagePrice}>R6,000+</span>
                    <div className={styles.packagePriceLabel}>starting from</div>
                  </div>
                </div>
                <div className={styles.packageContent}>
                  <ul className={styles.packageList}>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>⏱️</span>
                      <span>Unlimited mix length</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🌟</span>
                      <span>Advanced custom effects & storytelling</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🎨</span>
                      <span>Full branding integration</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🚀</span>
                      <span>Motion graphics package</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>💎</span>
                      <span>4K UHD Quality standard</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>⚡</span>
                      <span>Priority turnaround</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Custom Projects Section */}
              <div className={styles.packageSection}>
                <div className={styles.packageHeader}>
                  <div className={styles.packageTitleSection}>
                    <h3 className={styles.packageTitle}>Custom Projects</h3>
                    <div className={styles.packageSubtitle}>
                      Tailored solutions for unique requirements, lyric videos, promotional content, etc.
                    </div>
                  </div>
                  <div className={styles.packagePriceSection}>
                    <span className={styles.packagePrice}>Custom</span>
                    <div className={styles.packagePriceLabel}>contact for quote</div>
                  </div>
                </div>
                <div className={styles.packageContent}>
                  <ul className={styles.packageList}>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>💬</span>
                      <span>Consultation to define scope</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>💡</span>
                      <span>Personalized creative direction</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🛠️</span>
                      <span>Flexible deliverables</span>
                    </li>
                    <li className={styles.featureItem}>
                      <span className={styles.featureIcon}>🧑‍💼</span>
                      <span>Dedicated project manager</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Add-ons */}
              <div className={styles.addonsSection}>
                <h3 className={styles.addonsTitle}>Add-On Services</h3>
                <div className={styles.addonsDescription}>Enhance your package with these optional extras</div>
                <div className={styles.addonsGrid}>
                  <div className={styles.addonCard}>
                    <div className={styles.addonHeader}>
                      <span className={styles.addonIcon}>⏩</span>
                      <div className={styles.addonInfo}>
                        <div className={styles.addonName}>Rush Delivery</div>
                        <div className={styles.addonDesc}>48-hour turnaround</div>
                      </div>
                    </div>
                    <span className={styles.addonPrice}>+R500</span>
                  </div>
                  <div className={styles.addonCard}>
                    <div className={styles.addonHeader}>
                      <span className={styles.addonIcon}>🗣️</span>
                      <div className={styles.addonInfo}>
                        <div className={styles.addonName}>Basic Consultation</div>
                        <div className={styles.addonDesc}>30-minute planning session</div>
                      </div>
                    </div>
                    <span className={styles.addonPrice}>+R150</span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                  <h3 className={styles.ctaTitle}>Ready to Elevate Your DJ Brand?</h3>
                  <p className={styles.ctaText}>
                    Secure your shoot and let your DJ set shine on YouTube and social media. Quality visuals, clean edits, real results.
                  </p>
                  <div className={styles.ctaContactSection}>
                    <button className={styles.ctaContact} onClick={() => setIsModalOpen(true)}>
                      Contact Us Today
                    </button>
                    <div className={styles.ctaPhone}>067 681 7119 / 068 247 6726</div>
                  </div>
                  <div className={styles.ctaWarning}>
                    <span className={styles.warningIcon}>⚠️</span>
                    Limited slots available each month. Lock in your date today!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme={theme} />
    </div>
  );
};

export default ServicesSection;