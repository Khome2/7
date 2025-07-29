import React, { useEffect } from 'react';
import { Car, ArrowSquareUp, Document } from 'iconsax-react';
import { FaGithub } from 'react-icons/fa';

interface ProjectModalProps {
  isNightMode: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isNightMode, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    animation: 'fadeIn 0.3s ease-in'
  };

  const modalContentStyle: React.CSSProperties = {
    position: 'relative',
    background: isNightMode ? '#333333' : '#ffffff',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '600px',
    width: '90%',
    maxHeight: '80vh',
    overflow: 'auto',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    animation: 'slideIn 0.3s ease-in',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const closeButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: isNightMode ? '#ffffff' : '#444444',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease'
  };

  const modalTitleStyle: React.CSSProperties = {
    fontSize: '28px',
    fontWeight: 600,
    marginBottom: '30px',
    color: isNightMode ? '#ffffff' : '#444444',
    textAlign: 'center'
  };

  const projectListStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const projectItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    background: isNightMode ? '#444444' : '#f8f8f8',
    borderRadius: '15px',
    textDecoration: 'none',
    color: isNightMode ? '#ffffff' : '#444444',
    transition: 'all 0.3s ease',
    border: '2px solid transparent'
  };

  const projectIconStyle: React.CSSProperties = {
    fontSize: '24px',
    marginRight: '15px',
    color: '#6e57e0'
  };

  const projectInfoStyle: React.CSSProperties = {
    flex: 1
  };

  const projectTitleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '5px',
    color: isNightMode ? '#ffffff' : '#444444'
  };

  const projectDescriptionStyle: React.CSSProperties = {
    fontSize: '14px',
    color: isNightMode ? '#cccccc' : '#777777'
  };

  const externalLinkStyle: React.CSSProperties = {
    fontSize: '20px',
    color: '#6e57e0',
    marginLeft: '10px'
  };

  const projects = [
    {
      title: 'Vehicle Tracking System App',
      description: 'A comprehensive vehicle tracking application with real-time GPS monitoring and fleet management features.',
      link: 'https://github.com/Brightdotdev/VehicleTrackingSystem',
      icon: <Car size={24} />
    }
  ];

  const handleProjectClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div style={modalOverlayStyle} onClick={handleOverlayClick}>
      <div style={modalContentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>
        
        <h2 style={modalTitleStyle}>Completed Projects</h2>
        
        <div style={projectListStyle}>
          {projects.map((project, index) => (
            <div
              key={index}
              style={projectItemStyle}
              onClick={() => handleProjectClick(project.link)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = '#6e57e0';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <span style={projectIconStyle}>{project.icon}</span>
              <div style={projectInfoStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>
              </div>
              <span style={externalLinkStyle}><ArrowSquareUp size={20} /></span>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes slideIn {
            from {
              transform: translateY(-50px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          @media only screen and (max-width: 600px) {
            .modal-content {
              padding: 20px;
              margin: 20px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProjectModal; 