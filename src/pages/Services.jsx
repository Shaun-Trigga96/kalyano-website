import React from 'react';
import styles from './services.module.css';

const Services = () => (
  <div className={styles.pageContainer}>
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Services</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.serviceCard}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>CAPE VISIONS STUDIOS / KALYANO GROUP</h2>
            <p className={styles.headerSubtitle}>Cape Town Price List 2025</p>
          </div>
          
          <div className={styles.contentSection}>
            {/* Basic Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <h3 className={styles.packageTitle}>BASIC PACKAGE</h3>
                <span className={styles.packagePrice}>R1,400</span>
              </div>
              <div className={styles.packageGrid}>
                <ul className={styles.packageList}>
                  <li>1-hour shoot (1 location)</li>
                  <li>1 camera angle</li>
                  <li>Audio sync (provided track)</li>
                </ul>
                <ul className={styles.packageList}>
                  <li>Basic color correction</li>
                  <li>1 revision</li>
                </ul>
              </div>
            </div>

            {/* Standard Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <h3 className={styles.packageTitle}>STANDARD PACKAGE</h3>
                <span className={styles.packagePrice}>R3,000</span>
              </div>
              <div className={styles.packageGrid}>
                <ul className={styles.packageList}>
                  <li>1-hour shoot (1 location)</li>
                  <li>2 camera angles (handheld + static)</li>
                  <li>Drone shots (DJI Mini 3)</li>
                  <li>Logo overlay + DJ name title</li>
                </ul>
                <ul className={styles.packageList}>
                  <li>Audio sync & mastering</li>
                  <li>Lighting setup (if available)</li>
                  <li>Thumbnail design</li>
                  <li>Basic transitions + color grading</li>
                  <li>2 revisions</li>
                </ul>
              </div>
            </div>

            {/* Premium Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <h3 className={styles.packageTitle}>PREMIUM CINEMATIC PACKAGE</h3>
                <span className={styles.packagePrice}>R6,000+</span>
              </div>
              <div className={styles.packageGrid}>
                <ul className={styles.packageList}>
                  <li>1-hour shoot (up to 2 locations)</li>
                  <li>3+ camera angles (static, handheld, drone)</li>
                  <li>Full lighting setup</li>
                  <li>Custom intro/outro animations</li>
                  <li>Live-recorded or synced mix</li>
                </ul>
                <ul className={styles.packageList}>
                  <li>Cinematic color grading & transitions</li>
                  <li>Motion titles + overlays</li>
                  <li>30-sec BTS or teaser reel for social media</li>
                  <li>Thumbnail design</li>
                  <li>Up to 3 revisions</li>
                  <li>Travel within city limits included</li>
                </ul>
              </div>
            </div>

            {/* Add-ons */}
            <div className={styles.addonsSection}>
              <h3 className={styles.addonsTitle}>ADD-ONS (Optional Extras)</h3>
              <div className={styles.addonsGrid}>
                <div className={styles.addonItem}>
                  <span>Rush Delivery (48 hours)</span>
                  <span className={styles.addonPrice}>R500</span>
                </div>
                <div className={styles.addonItem}>
                  <span>Basic Consultation (30 mins)</span>
                  <span className={styles.addonPrice}>R150</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={styles.ctaSection}>
              <h3 className={styles.ctaTitle}>READY TO TAKE YOUR DJ BRAND TO THE NEXT LEVEL?</h3>
              <p className={styles.ctaText}>
                SECURE YOUR SHOOT AND LET YOUR DJ SET SHINE ON YOUTUBE AND SOCIALS.
                QUALITY VISUALS. CLEAN EDITS. REAL RESULTS.
              </p>
              <div className={styles.ctaContact}>CONTACT US</div>
              <div className={styles.ctaPhone}>067 681 7119 / 068 247 6726</div>
              <p className={styles.ctaWarning}>
                ***LIMITED SLOTS AVAILABLE EACH MONTH. LOCK IN YOUR DATE TODAY!***
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Services;