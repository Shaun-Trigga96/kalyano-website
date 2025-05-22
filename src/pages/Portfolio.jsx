import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock video data (replace with actual YouTube API integration)
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVideos([
        {
          id: 'dQw4w9WgXcQ',
          title: 'AMAPIANO Mix Session #1',
          thumbnail: '/api/placeholder/480/360',
          description: 'High-energy AMAPIANO mix featuring the latest hits'
        },
        {
          id: 'dQw4w9WgXcQ',
          title: 'DJ Set at Cape Town Venue',
          thumbnail: '/api/placeholder/480/360',
          description: 'Professional video mix production with multiple camera angles'
        },
        {
          id: 'dQw4w9WgXcQ',
          title: 'AMAPIANO Culture Showcase',
          thumbnail: '/api/placeholder/480/360',
          description: 'Cinematic video showcasing the vibrant AMAPIANO culture'
        },
        {
          id: 'dQw4w9WgXcQ',
          title: 'Artist Collaboration Mix',
          thumbnail: '/api/placeholder/480/360',
          description: 'Collaborative project featuring multiple AMAPIANO artists'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Our Portfolio</h1>
        
        <div className={styles.descriptionSection}>
          <p className={styles.descriptionText}>
            Check out our latest video mixes and see why DJs and artists choose KALYANO for their visual content.
          </p>
        </div>

        {loading ? (
          <div className={styles.loadingSection}>
            <div className={styles.loadingSpinner}></div>
            <p className={styles.loadingText}>Loading our latest work...</p>
          </div>
        ) : (
          <div className={styles.videoGrid}>
            {videos.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoImageContainer}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={styles.videoImage}
                  />
                  <div className={styles.videoOverlay}>
                    <button className={styles.watchButton}>
                      Watch Video
                    </button>
                  </div>
                </div>
                <div className={styles.videoContent}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className={styles.youtubeSection}>
          <a
            href="https://youtube.com/@kalyano"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.youtubeButton}
          >
            <svg className={styles.youtubeIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;