import React from 'react';

interface ProjectsProps {
  isNightMode: boolean;
  openModal: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ isNightMode, openModal }) => {
  const sectionStyle: React.CSSProperties = {
    paddingBlock: '5em'
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

  const projectContainerStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const projectBoxStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '30%',
    height: '250px',
    background: isNightMode ? '#333333' : '#ffffff',
    borderRadius: '20px',
    boxShadow: '1px 8px 10px 2px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const projectBoxIconStyle: React.CSSProperties = {
    fontSize: '50px',
    color: '#00B5E7',
    marginBottom: '25px',
    transition: 'all 0.4s ease'
  };

  const projectBoxLabelStyle: React.CSSProperties = {
    fontSize: '15px',
    color: isNightMode ? '#cccccc' : '#777777',
    transition: 'all 0.4s ease'
  };

  const projectBoxH3Style: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '10px',
    transition: 'all 0.4s ease'
  };

  const completedBoxStyle: React.CSSProperties = {
    ...projectBoxStyle,
    cursor: 'pointer'
  };

  const handleCompletedClick = () => {
    openModal();
  };

  return (
    <section className="section" id="projects" style={sectionStyle}>
      <div className="top-header" style={topHeaderStyle}>
        <h1 style={topHeaderH1Style}>Projects</h1>
      </div>
      <div className="project-container" style={projectContainerStyle}>
        <div 
          className="project-box completed-box" 
          style={completedBoxStyle}
          onClick={handleCompletedClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '1px 12px 15px 2px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '1px 8px 10px 2px rgba(0, 0, 0, 0.1)';
          }}
        >
          <i style={projectBoxIconStyle}>💼</i>
          <h3 style={projectBoxH3Style}>Completed</h3>
          <label style={projectBoxLabelStyle}>5+ Finished Projects</label>
        </div>
        
        <div 
          className="project-box" 
          style={projectBoxStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '1px 12px 15px 2px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '1px 8px 10px 2px rgba(0, 0, 0, 0.1)';
          }}
        >
          <i style={projectBoxIconStyle}>👥</i>
          <h3 style={projectBoxH3Style}>Clients</h3>
          <label style={projectBoxLabelStyle}>2+ Happy Clients</label>
        </div>
        
        <div 
          className="project-box" 
          style={projectBoxStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '1px 12px 15px 2px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '1px 8px 10px 2px rgba(0, 0, 0, 0.1)';
          }}
        >
          <i style={projectBoxIconStyle}>🏆</i>
          <h3 style={projectBoxH3Style}>Experience</h3>
          <label style={projectBoxLabelStyle}>2+ Years in the field</label>
        </div>
      </div>

      <style>
        {`
          @media only screen and (max-width: 900px) {
            .project-container {
              justify-content: center;
            }
            .project-box {
              width: 80%;
            }
          }
          
          @media only screen and (max-width: 540px) {
            .project-box {
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Projects; 