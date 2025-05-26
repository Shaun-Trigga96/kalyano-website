import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageContent from './pages/Home';
import AboutSection from './pages/About';
import ServicesSection from './pages/Services';
import PortfolioSection from './pages/Portfolio';
import ContactSection from './pages/Contact';

import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <HomePageContent theme={theme} />
        <AboutSection theme={theme} />
        <ServicesSection theme={theme} />
        <PortfolioSection theme={theme} />
        <ContactSection theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default App;