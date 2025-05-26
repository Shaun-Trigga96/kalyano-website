import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';

const PortfolioSection = ({ theme }) => {
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const KALYANO_CHANNEL_ID = 'UCYrjLc-k1-fPkdvncWGHrzg';

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      if (!YOUTUBE_API_KEY) {
        console.error('YouTube API Key is missing. Please set VITE_YOUTUBE_API_KEY in your .env file.');
        setError('YouTube API Key is missing. Cannot load videos.');
        setLoading(false);
        return;
      }
      if (KALYANO_CHANNEL_ID === 'YOUR_KALYANO_CHANNEL_ID' || !KALYANO_CHANNEL_ID) {
        console.error('KALYANO YouTube Channel ID is not set.');
        setError('YouTube Channel ID is not configured. Cannot load videos.');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${KALYANO_CHANNEL_ID}&part=snippet&maxResults=8&type=video&order=date`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`YouTube API error: ${response.status} - ${errorData.error.message || response.statusText}`);
        }
        const data = await response.json();

        const fetchedVideos = data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
          description: item.snippet.description,
        }));
        setVideos(fetchedVideos);
      } catch (err) {
        console.error('Failed to fetch YouTube videos:', err);
        setError(err.message || 'Failed to load videos. Please try again later.');
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
  }, [YOUTUBE_API_KEY]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="portfolio" className={`${styles.pageContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>Our Portfolio</h1>
          <div className={styles.descriptionSection}>
            <p className={styles.descriptionText}>
              Discover our latest video productions and see why DJs and artists choose KALYANO for their visual content.
            </p>
            <div className={styles.statsSection}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Videos Produced</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>25+</div>
                <div className={styles.statLabel}>Happy Artists</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>100K+</div>
                <div className={styles.statLabel}>Total Views</div>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className={styles.loadingSection}>
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpinner}></div>
              <div className={styles.loadingDots}>
                <div className={styles.loadingDot}></div>
                <div className={styles.loadingDot}></div>
                <div className={styles.loadingDot}></div>
              </div>
            </div>
            <p className={styles.loadingText}>Loading our latest work...</p>
          </div>
        ) : error ? (
          <div className={styles.errorSection}>
            <div className={styles.errorCard}>
              <div className={styles.errorIcon}>⚠️</div>
              <div className={styles.errorContent}>
                <h3 className={styles.errorTitle}>Unable to Load Videos</h3>
                <p className={styles.errorText}>{error}</p>
                <button
                  className={styles.retryButton}
                  onClick={() => window.location.reload()}
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.contentSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Latest Productions</h2>
              <div className={styles.sectionSubtitle}>
                Showcasing our most recent work with top DJs and artists
              </div>
            </div>

            <div className={styles.videoGrid}>
              {videos.length > 0 ? videos.map((video, index) => (
                <div key={video.id} className={styles.videoCard} style={{'--delay': `${index * 0.1}s`}}>
                  <div className={styles.videoImageContainer}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className={styles.videoImage}
                      loading="lazy"
                    />
                    <div className={styles.videoOverlay}>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.watchButton}
                      >
                        <div className={styles.playIconContainer}>
                          <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className={styles.watchButtonText}>Watch Video</span>
                      </a>
                    </div>
                    <div className={styles.videoBadge}>
                      <span className={styles.badgeIcon}>🎬</span>
                      <span>HD Quality</span>
                    </div>
                  </div>
                  <div className={styles.videoContent}>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    <div className={styles.videoMeta}>
                      <span className={styles.videoMetaItem}>
                        <span className={styles.metaIcon}>👁️</span>
                        Professional Edit
                      </span>
                      <span className={styles.videoMetaItem}>
                        <span className={styles.metaIcon}>🎵</span>
                        Audio Mastered
                      </span>
                    </div>
                  </div>
                </div>
              )) : (
                <div className={styles.noVideosSection}>
                  <div className={styles.noVideosIcon}>📹</div>
                  <h3 className={styles.noVideosTitle}>No Videos Available</h3>
                  <p className={styles.noVideosText}>Check back soon for our latest productions!</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Create Something Amazing?</h2>
            <p className={styles.ctaDescription}>
              Join our community of successful DJs and artists who trust KALYANO with their visual content.
            </p>
            <div className={styles.ctaButtons}>
              <a
                href="https://www.youtube.com/channel/UCYrjLc-k1-fPkdvncWGHrzg"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtubeButton}
              >
                <div className={styles.youtubeIconContainer}>
                  <svg className={styles.youtubeIcon} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className={styles.buttonContent}>
                  <span className={styles.buttonTitle}>Visit Our Channel</span>
                  <span className={styles.buttonSubtitle}>@kalyano</span>
                </div>
              </a>
              <a
                href="#services"
                className={styles.servicesButton}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                <span className={styles.servicesIcon}>💼</span>
                <span>View Our Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;