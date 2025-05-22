import React from 'react';
import styles from './about.module.css';

// 1. Import your images
// Make sure these paths are correct and the images exist.
// import hlumeloImage from '../assets/team/hlumelo-madonono.jpg'; // Example path
// import onesimoImage from '../assets/team/onesimo-siloyi.jpg';   // Example path
// import sihleImage from '../assets/team/sihle-vision.jpg';     // Example path
// import viweImage from '../assets/team/viwe-mtuna.jpg';        // Example path
// import thandoImage from '../assets/team/thandolwethu-siloyi.jpg';// Example path
import thabisoImage from '../assets/team/thabiso-matsaba.jpg';  // Example path

const GENERIC_PLACEHOLDER_IMAGE_URL = 'https://placehold.co/100x100/EEE/CCC?text=No+Image';

const About = () => {
  const teamMembers = [
    { name: 'Hlumelo "RonnieSA" Madonono', role: 'DJ/Editor', imageSrc: GENERIC_PLACEHOLDER_IMAGE_URL, imageHint: 'Photo of Hlumelo Madonono, DJ and Editor for KALYANO' },
    { name: 'Onesimo "Sir Onies" Siloyi', role: 'DJ/Editor', imageSrc: GENERIC_PLACEHOLDER_IMAGE_URL, imageHint: 'Photo of Onesimo Siloyi, DJ and Editor for KALYANO' },
    { name: 'Sihle "Vision"', role: 'Production/Lead Video Editor', imageSrc: GENERIC_PLACEHOLDER_IMAGE_URL, imageHint: 'Photo of Sihle, Lead Video Editor and Production for KALYANO' },
    { name: 'Viwe Mtuna', role: 'Communications Director', imageSrc: GENERIC_PLACEHOLDER_IMAGE_URL, imageHint: 'Photo of Viwe Mtuna, Communications Director for KALYANO' },
    { name: 'Thandolwethu Siloyi', role: 'Production/Lead Video Editor', imageSrc: GENERIC_PLACEHOLDER_IMAGE_URL, imageHint: 'Photo of Thandolwethu Siloyi, Lead Video Editor and Production for KALYANO' },
    { name: 'Thabiso Matsaba', role: 'Technical Director', imageSrc: thabisoImage, imageHint: 'Photo of Thabiso Matsaba, Technical Director for KALYANO' },
  ];

  const handleImageError = (event) => {
    // To prevent an infinite loop if the placeholder itself fails to load
    if (event.target.src !== GENERIC_PLACEHOLDER_IMAGE_URL) {
      event.target.src = GENERIC_PLACEHOLDER_IMAGE_URL;
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.mainTitle}>About KALYANO</h1>
          
          <div className={styles.missionGrid}>
            <div className={styles.missionSection}>
              <h2 className={styles.missionTitle}>Our Mission</h2>
              <p className={styles.missionText}>
                KALYANO is dedicated to elevating AMAPIANO culture through high-quality visual content. We believe in the power of music and visuals to connect people and tell stories. Our mission is to provide artists and DJs with creative and professional video mix productions that capture the essence of AMAPIANO, helping them reach wider audiences and make a lasting impact.
              </p>
              <p className={styles.missionText}>
                Our mission is to elevate DJ brands and help artists showcase their talent through visually 
                stunning and professionally produced content that resonates with the AMAPIANO community.
              </p>
            </div>
            
            <div className={styles.amapianoCard}>
              <h3 className={styles.amapianoTitle}>Why AMAPIANO?</h3>
              <p className={styles.amapianoText}>
                AMAPIANO represents more than just music - it's a cultural movement that embodies creativity, 
                community, and authentic expression. We're passionate about preserving and promoting this 
                unique South African sound through compelling visual storytelling.
              </p>
            </div>
          </div>

          <div className={styles.expertiseSection}>
            <h2 className={styles.expertiseTitle}>Our Expertise</h2>
            <div className={styles.expertiseGrid}>
              <div className={styles.expertiseColumn}>
                <h3 className={styles.expertiseSubtitle}>Video Production</h3>
                <ul className={styles.expertiseList}>
                  <li>Multi-camera setups</li>
                  <li>Drone cinematography</li>
                  <li>Professional lighting</li>
                  <li>Cinematic color grading</li>
                </ul>
              </div>
              <div className={styles.expertiseColumn}>
                <h3 className={styles.expertiseSubtitle}>Audio-Visual Sync</h3>
                <ul className={styles.expertiseList}>
                  <li>Perfect audio synchronization</li>
                  <li>Professional mastering</li>
                  <li>Custom intro/outro animations</li>
                  <li>Motion graphics and overlays</li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Team Section */}
          <section className={styles.teamSection}>
            <div className={styles.teamCard}>
              <div className={styles.teamCardHeader}>
                <h2 className={styles.teamCardTitle}>
                  <svg className={styles.teamIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  The Team
                </h2>
              </div>
              <div className={styles.teamCardContent}>
                <p className={styles.teamDescription}>
                  We are a collective of young, passionate, and talented content creators with a shared love for AMAPIANO. Each member brings a unique set of skills in video editing, graphic design, and music production, all fueled by the vibrant energy of the AMAPIANO scene. We thrive on collaboration and innovation, constantly pushing creative boundaries.
                </p>
                <div className={styles.teamGrid}>
                  {teamMembers.map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                      <div className={styles.memberCardContent}>
                        <img
                          src={member.imageSrc} // 2. Use the imageSrc from your teamMembers array
                          alt={member.name}
                          width={100}
                          height={100}
                          className={styles.memberImage}
                          data-ai-hint={member.imageHint}
                          onError={handleImageError}
                        />
                        <h3 className={styles.memberName}>{member.name}</h3>
                        <p className={styles.memberRole}>{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;