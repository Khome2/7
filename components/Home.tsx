import React, { useState, useEffect } from 'react';
import { Document, Mouse, Instagram, Youtube, User } from 'iconsax-react';
import { FaGithub } from 'react-icons/fa';

interface HomeProps {
  isNightMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isNightMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = [' an Editor', ' a Developer'];
  const typingSpeed = 100;
  const deletingSpeed = 80;
  const pauseTime = 2000;

  useEffect(() => {
    const typeText = () => {
      const currentFullText = texts[textIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
        if (currentText === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  const featuredBoxStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    height: '100vh',
    minHeight: '700px',
    alignItems: 'center'
  };

  const featuredTextStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    minHeight: '80vh',
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '20px'
  };

  const featuredTextCardStyle: React.CSSProperties = {
    background: '#c0a631',
    color: '#ffffff',
    padding: '3px 8px',
    fontSize: '12px',
    borderRadius: '5px',
    display: 'inline-block',
    width: 'fit-content'
  };

  const featuredNameStyle: React.CSSProperties = {
    fontSize: '50px',
    fontWeight: 600,
    color: isNightMode ? '#ffffff' : '#444444',
    marginBlock: '20px'
  };

  const typedTextStyle: React.CSSProperties = {
    textTransform: 'capitalize',
    color: '#1e9fab'
  };

  const featuredTextInfoStyle: React.CSSProperties = {
    fontSize: '15px',
    marginBottom: '30px',
    color: isNightMode ? '#cccccc' : '#444444'
  };

  const featuredTextBtnStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px'
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

  const blueBtnStyle: React.CSSProperties = {
    ...btnStyle,
    background: '#6e57e0',
    color: '#ffffff'
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    marginTop: '5em',
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

  const featuredImageStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'right',
    alignContent: 'center',
    minHeight: '80vh',
    width: '50%'
  };

  const imageStyle: React.CSSProperties = {
    margin: 'auto 0',
    width: '380px',
    height: '380px',
    borderRadius: '55% 45% 55% 45%',
    overflow: 'hidden',
    animation: 'imgFloat 7s ease-in-out infinite',
    background: isNightMode ? '#333333' : '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '100px'
  };

  const scrollBtnStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '150px',
    height: '50px',
    gap: '5px',
    textDecoration: 'none',
    color: isNightMode ? '#ffffff' : '#444444',
    background: isNightMode ? '#333333' : '#ffffff',
    borderRadius: '30px',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s ease'
  };

  return (
    <section className="featured-box" id="home" style={featuredBoxStyle}>
      <div className="featured-text" style={featuredTextStyle}>
        <div className="featured-text-card" style={featuredTextCardStyle}>
          <span>Osho Daniel</span>
        </div>
        <div className="featured-name" style={featuredNameStyle}>
          <p>I'm <span className="typedText" style={typedTextStyle}>{currentText}</span></p>
        </div>
        <div className="featured-text-info" style={featuredTextInfoStyle}>
          <p>
            As a student, I am passionate about creating visually stunning and user-friendly mobile apps and websites using React Native, HTML, CSS, and JavaScript. I am committed to continuous learning and enhancing my skills to deliver seamless, interactive experiences.
          </p>
        </div>
        <div className="featured-text-btn" style={featuredTextBtnStyle}>
          <button style={blueBtnStyle}>Hire Me</button>
          <button style={btnStyle}>Download CV <Document size={20} style={{ marginLeft: '10px' }} /></button>
        </div>
        <div className="social_icons" style={socialIconsStyle}>
          <a href="https://www.tiktok.com/@khome.cc?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={iconStyle}><Instagram size={20} /></div>
          </a>
          <div className="icon" style={iconStyle}><User size={20} /></div>
          <a href="https://youtube.com/@khomecc?si=D6BwlEcZQcIUW8jj" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={iconStyle}><Youtube size={20} /></div>
          </a>
          <a href="https://github.com/Khome2" target="_blank" rel="noopener noreferrer">
            <div className="icon" style={iconStyle}><FaGithub size={20} /></div>
          </a>
        </div>
      </div>
      
      <div className="featured-image" style={featuredImageStyle}>
        <div className="image" style={imageStyle}>
          👨‍💻
        </div>
      </div>
      
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn" style={scrollBtnStyle}>
          <Mouse size={20} />
          <p>Scroll Down</p>
        </a>
      </div>

      <style>
        {`
          @keyframes imgFloat {
            50% {
              transform: translateY(10px);
              border-radius: 45% 55% 45% 55%;
            }
          }
          
          @media only screen and (max-width: 900px) {
            .featured-box {
              flex-direction: column;
              justify-content: center;
              height: 100vh;
            }
            .featured-text {
              width: 100%;
              order: 2;
              justify-content: center;
              align-content: flex-start;
              min-height: 60vh;
            }
            .featured-image {
              order: 1;
              justify-content: center;
              min-height: 150px;
              width: 100%;
              margin-top: 65px;
            }
            .image {
              width: 150px !important;
              height: 150px !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Home; 