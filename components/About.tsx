import React from 'react';

interface AboutProps {
  isNightMode: boolean;
}

const About: React.FC<AboutProps> = ({ isNightMode }) => {
  const sectionStyle: React.CSSProperties = {
    paddingBlock: '5em'
  };

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '50px'
  };

  const colStyle: React.CSSProperties = {
    display: 'flex',
    width: '50%'
  };

  const topHeaderStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '5em'
  };

  const topHeaderH1Style: React.CSSProperties = {
    fontWeight: 600,
    color: isNightMode ? '#ffffff' : '#444444',
    marginBottom: '10px'
  };

  const aboutInfoStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBlock: '30px 70px',
    paddingInline: '20px',
    width: '100%',
    background: isNightMode ? '#333333' : '#ffffff',
    boxShadow: '1px 8px 10px 2px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const aboutInfoPStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '15px',
    color: isNightMode ? '#cccccc' : '#777777'
  };

  const aboutBtnStyle: React.CSSProperties = {
    position: 'absolute',
    right: '20px',
    bottom: '20px',
    background: '#6e57e0',
    color: '#ffffff',
    borderRadius: '30px',
    fontWeight: 500,
    padding: '12px 20px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.4s ease'
  };

  const skillsBoxStyle: React.CSSProperties = {
    margin: '10px'
  };

  const skillsHeaderStyle: React.CSSProperties = {
    marginBottom: '30px',
    fontSize: '20px',
    fontWeight: 600,
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const skillsListStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px'
  };

  const skillSpanStyle: React.CSSProperties = {
    fontSize: '14px',
    background: '#6e57e0',
    color: '#ffffff',
    padding: '2px 10px',
    borderRadius: '5px'
  };

  return (
    <section className="section" id="about" style={sectionStyle}>
      <div className="top-header" style={topHeaderStyle}>
        <h1 style={topHeaderH1Style}>About Me</h1>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col" style={colStyle}>
          <div className="about-info" style={aboutInfoStyle}>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '15px', color: isNightMode ? '#ffffff' : '#444444' }}>
              My introduction
            </h3>
            <p style={aboutInfoPStyle}>
              I'm a student learning programming with a focus on web development and React Native. Currently working on personal projects to improve my skills.
            </p>
            <div className="about-btn">
              <button style={aboutBtnStyle}>
                Download CV 📥
              </button>
            </div>
          </div>
        </div>
        <div className="col" style={colStyle}>
          <div className="skills-box" style={skillsBoxStyle}>
            <div className="skills-header" style={skillsHeaderStyle}>
              <h3>Frontend</h3>
            </div>
            <div className="skills-list" style={skillsListStyle}>
              <span style={skillSpanStyle}>HTML</span>
              <span style={skillSpanStyle}>CSS</span>
              <span style={skillSpanStyle}>Typescript</span>
              <span style={skillSpanStyle}>JavaScript</span>
              <span style={skillSpanStyle}>React Native</span>
            </div>
          </div>
          <div className="skills-box" style={skillsBoxStyle}>
            <div className="skills-header" style={skillsHeaderStyle}>
              <h3>Backend</h3>
            </div>
            <div className="skills-list" style={skillsListStyle}>
              <span style={skillSpanStyle}>JAVA</span>
              
            </div>
          </div>
          <div className="skills-box" style={skillsBoxStyle}>
            <div className="skills-header" style={skillsHeaderStyle}>
              <h3>Database</h3>
            </div>
            <div className="skills-list" style={skillsListStyle}>
              <span style={skillSpanStyle}>MySQL</span>
              
              <span style={skillSpanStyle}>MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @media only screen and (max-width: 900px) {
            .row {
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 50px;
            }
            .col {
              display: flex;
              justify-content: center;
              width: 100%;
            }
            .about-info {
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default About; 