import React from 'react';
import styles from './services.module.css';

const Services = () => (
  <div className={styles.pageContainer}>
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Services</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.serviceCard}>
          <div className={styles.headerSection}>
            <h2 className={styles.headerTitle}>CAPE VISIONS STUDIOS</h2>
            <div className={styles.headerSubtitle}>KALYANO GROUP</div>
            <p className={styles.headerDescription}>Cape Town Price List 2025</p>
          </div>
          
          <div className={styles.contentSection}>
            {/* Basic Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <div className={styles.packageTitleSection}>
                  <h3 className={styles.packageTitle}>Basic Package</h3>
                  <div className={styles.packageSubtitle}>Perfect for getting started</div>
                </div>
                <div className={styles.packagePriceSection}>
                  <span className={styles.packagePrice}>R1,400</span>
                  <div className={styles.packagePriceLabel}>one-time</div>
                </div>
              </div>
              <div className={styles.packageContent}>
                <div className={styles.packageGrid}>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>📹</span>
                          <span>1-hour shoot (1 location)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎥</span>
                          <span>1 camera angle</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎵</span>
                          <span>Audio sync (provided track)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Post-Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎨</span>
                          <span>Basic color correction</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>✏️</span>
                          <span>1 revision included</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standard Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <div className={styles.packageTitleSection}>
                  <h3 className={styles.packageTitle}>Standard Package</h3>
                  <div className={styles.packageSubtitle}>Most popular choice</div>
                  <div className={styles.popularBadge}>POPULAR</div>
                </div>
                <div className={styles.packagePriceSection}>
                  <span className={styles.packagePrice}>R3,000</span>
                  <div className={styles.packagePriceLabel}>one-time</div>
                </div>
              </div>
              <div className={styles.packageContent}>
                <div className={styles.packageGrid}>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>📹</span>
                          <span>1-hour shoot (1 location)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎥</span>
                          <span>2 camera angles (handheld + static)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🚁</span>
                          <span>Drone shots (DJI Mini 3)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>💡</span>
                          <span>Lighting setup (if available)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Post-Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎵</span>
                          <span>Audio sync & mastering</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🏷️</span>
                          <span>Logo overlay + DJ name title</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🖼️</span>
                          <span>Thumbnail design</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎨</span>
                          <span>Basic transitions + color grading</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>✏️</span>
                          <span>2 revisions included</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Package */}
            <div className={styles.packageSection}>
              <div className={styles.packageHeader}>
                <div className={styles.packageTitleSection}>
                  <h3 className={styles.packageTitle}>Premium Cinematic</h3>
                  <div className={styles.packageSubtitle}>Complete professional experience</div>
                  <div className={styles.premiumBadge}>PREMIUM</div>
                </div>
                <div className={styles.packagePriceSection}>
                  <span className={styles.packagePrice}>R6,000+</span>
                  <div className={styles.packagePriceLabel}>starting from</div>
                </div>
              </div>
              <div className={styles.packageContent}>
                <div className={styles.packageGrid}>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>📹</span>
                          <span>1-hour shoot (up to 2 locations)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎥</span>
                          <span>3+ camera angles (static, handheld, drone)</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>💡</span>
                          <span>Full lighting setup</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎵</span>
                          <span>Live-recorded or synced mix</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🚗</span>
                          <span>Travel within city limits included</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.packageColumn}>
                    <div className={styles.featureGroup}>
                      <h4 className={styles.featureGroupTitle}>Post-Production</h4>
                      <ul className={styles.packageList}>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎬</span>
                          <span>Custom intro/outro animations</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🎨</span>
                          <span>Cinematic color grading & transitions</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>✨</span>
                          <span>Motion titles + overlays</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>📱</span>
                          <span>30-sec BTS or teaser reel for social media</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>🖼️</span>
                          <span>Thumbnail design</span>
                        </li>
                        <li className={styles.featureItem}>
                          <span className={styles.featureIcon}>✏️</span>
                          <span>Up to 3 revisions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className={styles.addonsSection}>
              <h3 className={styles.addonsTitle}>Add-On Services</h3>
              <div className={styles.addonsDescription}>Enhance your package with these optional extras</div>
              <div className={styles.addonsGrid}>
                <div className={styles.addonCard}>
                  <div className={styles.addonHeader}>
                    <span className={styles.addonIcon}>⚡</span>
                    <div className={styles.addonInfo}>
                      <div className={styles.addonName}>Rush Delivery</div>
                      <div className={styles.addonDesc}>48-hour turnaround</div>
                    </div>
                  </div>
                  <span className={styles.addonPrice}>R500</span>
                </div>
                <div className={styles.addonCard}>
                  <div className={styles.addonHeader}>
                    <span className={styles.addonIcon}>💬</span>
                    <div className={styles.addonInfo}>
                      <div className={styles.addonName}>Basic Consultation</div>
                      <div className={styles.addonDesc}>30-minute planning session</div>
                    </div>
                  </div>
                  <span className={styles.addonPrice}>R150</span>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className={styles.ctaSection}>
              <div className={styles.ctaContent}>
                <h3 className={styles.ctaTitle}>Ready to Elevate Your DJ Brand?</h3>
                <p className={styles.ctaText}>
                  Secure your shoot and let your DJ set shine on YouTube and social media. 
                  Quality visuals, clean edits, real results.
                </p>
                <div className={styles.ctaContactSection}>
                  <div className={styles.ctaContact}>Contact Us Today</div>
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
  </div>
);

export default Services;