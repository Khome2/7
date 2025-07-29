import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

const App: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const appStyle: React.CSSProperties = {
    backgroundColor: isNightMode ? '#1a1a1a' : '#fafafa',
    color: isNightMode ? '#ffffff' : '#444444',
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={appStyle}>
      <Header 
        isNightMode={isNightMode} 
        toggleNightMode={toggleNightMode}
        activeSection={activeSection}
      />
      
      <main style={{ paddingInline: '10vw' }}>
        <Home isNightMode={isNightMode} />
        <About isNightMode={isNightMode} />
        <Projects isNightMode={isNightMode} openModal={openModal} />
        <Contact isNightMode={isNightMode} />
      </main>

      <Footer isNightMode={isNightMode} />

      {isModalOpen && (
        <ProjectModal 
          isNightMode={isNightMode} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;
