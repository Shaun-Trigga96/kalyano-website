import React, { useState, useEffect } from 'react';
import styles from './portfolio.module.css';

const Portfolio = () => {
  // Retrieve API key and Channel ID from environment variables or constants
  // Ensure your API key is stored in a .env file as VITE_YOUTUBE_API_KEY for Vite projects
  const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  // Replace 'YOUR_KALYANO_CHANNEL_ID' with the actual Channel ID you found
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
        // Fetches the 8 most recent videos from the specified channel
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
        setVideos([]); // Clear videos on error
      } finally {
        setLoading(false);
      }
    };

    fetchYouTubeVideos();
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
      ) : error ? (
        <div className={styles.errorSection}>
          <p className={styles.errorText}>⚠️ {error}</p>
        </div>
        ) : (
        <div className={styles.videoGrid}>
          {videos.length > 0 ? videos.map((video) => (
            <div key={video.id} className={styles.videoCard}>
              <div className={styles.videoImageContainer}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className={styles.videoImage}
                  // Optional: Add an onError handler for thumbnails if needed
                  // onError={(e) => { e.target.src = 'path/to/default/thumbnail.png'; }}
                />
                <div className={styles.videoOverlay}>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.watchButton}
                  >
                    <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                      Watch Video
                  </a>
                </div>
              </div>
              <div className={styles.videoContent}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                {/* <p className={styles.videoDescription}>{video.description}</p> */} {/* Description can be long, consider showing it on hover/click or a dedicated page */}
              </div>
            </div>
          )) : <p className={styles.noVideosText}>No videos found. Check back later!</p>}
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