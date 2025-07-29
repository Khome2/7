import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, Document } from 'iconsax-react';

interface HeaderProps {
  isNightMode: boolean;
  toggleNightMode: () => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ isNightMode, toggleNightMode, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderShadow(true);
      } else {
        setHeaderShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerStyle: React.CSSProperties = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: headerShadow ? '70px' : '90px',
    lineHeight: headerShadow ? '70px' : '90px',
    backgroundColor: isNightMode ? '#1a1a1a' : '#fafafa',
    paddingInline: '9vw',
    transition: 'all 0.3s ease',
    zIndex: 100,
    boxShadow: headerShadow ? '0 1px 6px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const navLogoStyle: React.CSSProperties = {
    position: 'relative'
  };

  const navNameStyle: React.CSSProperties = {
    fontSize: '30px',
    fontWeight: 600,
    color: isNightMode ? '#1e9fab' : '#1e9fab'
  };

  const navLogoSpanStyle: React.CSSProperties = {
    position: 'absolute',
    top: '-15px',
    right: '-20px',
    fontSize: '5em',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const navMenuStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const navListStyle: React.CSSProperties = {
    listStyle: 'none',
    position: 'relative'
  };

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    textDecoration: 'none',
    color: isActive ? '#6e57e0' : (isNightMode ? '#ffffff' : '#444444'),
    fontWeight: 500,
    paddingInline: '15px',
    marginInline: '20px',
    transition: 'color 0.3s ease',
    position: 'relative'
  });

  const activeLinkAfterStyle: React.CSSProperties = {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: '-15px',
    transform: 'translate(-50%, -50%)',
    width: '5px',
    height: '5px',
    backgroundColor: '#6e57e0',
    borderRadius: '50%'
  };

  const btnStyle: React.CSSProperties = {
    fontWeight: 500,
    padding: '12px 20px',
    background: isNightMode ? '#333333' : '#efefef',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const nightModeToggleStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: isNightMode ? '#333333' : '#efefef',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    transition: 'all 0.3s ease'
  };

  const mobileMenuStyle: React.CSSProperties = {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    cursor: 'pointer',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const responsiveMenuStyle: React.CSSProperties = {
    position: 'fixed',
    top: '80px',
    left: isMenuOpen ? '0' : '-100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: isNightMode ? 'rgba(26, 26, 26, 0.9)' : 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(20px)',
    width: '100%',
    minHeight: '450px',
    height: '90vh',
    transition: 'left 0.3s ease',
    zIndex: 99
  };

  return (
    <nav style={headerStyle}>
      <div style={navLogoStyle}>
        <p style={navNameStyle}>Khome</p>
        <span style={navLogoSpanStyle}>.</span>
      </div>

      <div style={{ ...navMenuStyle, ...(window.innerWidth <= 900 ? responsiveMenuStyle : {}) }}>
        <ul style={{ display: 'flex', flexDirection: window.innerWidth <= 900 ? 'column' : 'row', gap: '20px' }}>
          <li style={navListStyle}>
            <a href="#home" style={navLinkStyle(activeSection === 'home')}>
              Home
              {activeSection === 'home' && <div style={activeLinkAfterStyle}></div>}
            </a>
          </li>
          <li style={navListStyle}>
            <a href="#about" style={navLinkStyle(activeSection === 'about')}>
              About
              {activeSection === 'about' && <div style={activeLinkAfterStyle}></div>}
            </a>
          </li>
          <li style={navListStyle}>
            <a href="#projects" style={navLinkStyle(activeSection === 'projects')}>
              Projects
              {activeSection === 'projects' && <div style={activeLinkAfterStyle}></div>}
            </a>
          </li>
          <li style={navListStyle}>
            <a href="#contact" style={navLinkStyle(activeSection === 'contact')}>
              Contact
              {activeSection === 'contact' && <div style={activeLinkAfterStyle}></div>}
            </a>
          </li>
        </ul>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={btnStyle}>
          Download CV <Document size={20} style={{ marginLeft: '10px' }} />
        </button>
        
        <button style={nightModeToggleStyle} onClick={toggleNightMode}>
          {isNightMode ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        <div style={mobileMenuStyle} onClick={toggleMenu}>
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Header; 