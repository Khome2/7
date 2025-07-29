import React from 'react';
import { FaGithub, FaLinkedin, FaTiktok, FaYoutube } from 'react-icons/fa';

interface FooterProps {
  isNightMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isNightMode }) => {
  const footerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '30px',
    background: isNightMode ? '#222222' : '#F8F8F8',
    paddingBlock: '40px 60px',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const topFooterStyle: React.CSSProperties = {
    fontSize: '25px',
    fontWeight: 600,
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const middleFooterStyle: React.CSSProperties = {
    display: 'flex'
  };

  const footerMenuStyle: React.CSSProperties = {
    display: 'flex',
    listStyle: 'none',
    gap: '20px'
  };

  const footerMenuListStyle: React.CSSProperties = {
    listStyle: 'none'
  };

  const footerMenuLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: isNightMode ? '#ffffff' : '#444444',
    fontWeight: 500,
    marginInline: '20px',
    transition: 'color 0.3s ease'
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '30px'
  };

  const iconStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.25)',
    cursor: 'pointer',
    background: isNightMode ? '#333333' : '#ffffff',
    color: isNightMode ? '#ffffff' : '#444444',
    transition: 'all 0.3s ease'
  };

  const bottomFooterStyle: React.CSSProperties = {
    fontSize: '14px',
    marginTop: '10px',
    color: isNightMode ? '#cccccc' : '#444444'
  };

  const bottomFooterLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: isNightMode ? '#1e9fab' : '#1e9fab'
  };

  return (
    <footer style={footerStyle}>
      <div className="top-footer" style={topFooterStyle}>
        <p>Osho Daniel .</p>
      </div>
      <div className="middle-footer" style={middleFooterStyle}>
        <ul className="footer-menu" style={footerMenuStyle}>
          <li className="footer_menu_list" style={footerMenuListStyle}>
            <a href="#home" style={footerMenuLinkStyle}>Home</a>
          </li>
          <li className="footer_menu_list" style={footerMenuListStyle}>
            <a href="#about" style={footerMenuLinkStyle}>About</a>
          </li>
          <li className="footer_menu_list" style={footerMenuListStyle}>
            <a href="#projects" style={footerMenuLinkStyle}>Projects</a>
          </li>
          <li className="footer_menu_list" style={footerMenuListStyle}>
            <a href="#contact" style={footerMenuLinkStyle}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="social_icons" style={socialIconsStyle}>
        <a href="https://www.tiktok.com/@khome.cc?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
          <div className="icon" style={iconStyle}><FaTiktok size={20} /></div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <div className="icon" style={iconStyle}><FaLinkedin size={20} /></div>
        </a>
        <a href="https://youtube.com/@khomecc?si=D6BwlEcZQcIUW8jj" target="_blank" rel="noopener noreferrer">
          <div className="icon" style={iconStyle}><FaYoutube size={20} /></div>
        </a>
        <a href="https://github.com/Khome2" target="_blank" rel="noopener noreferrer">
          <div className="icon" style={iconStyle}><FaGithub size={20} /></div>
        </a>
      </div>
      <div className="bottom-footer" style={bottomFooterStyle}>
        <p>
          Copyright &copy; <a href="#home" style={bottomFooterLinkStyle}>Osho Daniel</a> - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer; 