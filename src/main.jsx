import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Set document title for KALYANO
document.title = 'KALYANO - Professional Video Production in Cape Town';

// Set meta description for SEO
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'KALYANO offers professional video production services in Cape Town, South Africa. Specializing in AMAPIANO culture videos, music videos, and cinematic content. Packages from R1,400.';
document.head.appendChild(metaDescription);

// Set meta keywords for SEO
const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'video production, Cape Town, AMAPIANO, music videos, cinematic videos, professional filming, video editing, South Africa';
document.head.appendChild(metaKeywords);

// Set viewport meta tag for responsive design
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(metaViewport);

// Set Open Graph meta tags for social media sharing
const ogTitle = document.createElement('meta');
ogTitle.property = 'og:title';
ogTitle.content = 'KALYANO - Professional Video Production';
document.head.appendChild(ogTitle);

const ogDescription = document.createElement('meta');
ogDescription.property = 'og:description';
ogDescription.content = 'Professional video production services in Cape Town. Specializing in AMAPIANO culture and cinematic content.';
document.head.appendChild(ogDescription);

const ogType = document.createElement('meta');
ogType.property = 'og:type';
ogType.content = 'website';
document.head.appendChild(ogType);

const ogUrl = document.createElement('meta');
ogUrl.property = 'og:url';
ogUrl.content = 'https://kalyano.com';
document.head.appendChild(ogUrl);

// Set Twitter Card meta tags
const twitterCard = document.createElement('meta');
twitterCard.name = 'twitter:card';
twitterCard.content = 'summary_large_image';
document.head.appendChild(twitterCard);

const twitterTitle = document.createElement('meta');
twitterTitle.name = 'twitter:title';
twitterTitle.content = 'KALYANO - Professional Video Production';
document.head.appendChild(twitterTitle);

const twitterDescription = document.createElement('meta');
twitterDescription.name = 'twitter:description';
twitterDescription.content = 'Professional video production services in Cape Town. AMAPIANO culture specialists.';
document.head.appendChild(twitterDescription);

// Create and mount the React app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)