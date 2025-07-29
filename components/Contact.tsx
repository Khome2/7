import React, { useState } from 'react';
import { Sms, Call, Send } from 'iconsax-react';

interface ContactProps {
  isNightMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isNightMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const topHeaderSpanStyle: React.CSSProperties = {
    color: isNightMode ? '#cccccc' : '#999999'
  };

  const contactInfoStyle: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 30px',
    width: '100%',
    height: '315px',
    background: '#00c9ff',
    borderRadius: '10px',
    boxShadow: '1px 8px 10px 2px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    color: '#ffffff'
  };

  const contactInfoH2Style: React.CSSProperties = {
    color: '#ffffff',
    marginBottom: '20px'
  };

  const contactInfoPStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#ffffff',
    marginBlock: '5px'
  };

  const contactInfoIStyle: React.CSSProperties = {
    fontSize: '18px'
  };

  const formControlStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%'
  };

  const formInputsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    width: '100%'
  };

  const inputFieldStyle: React.CSSProperties = {
    width: '50%',
    height: '55px',
    background: 'transparent',
    border: `2px solid ${isNightMode ? '#555555' : '#AAAAAA'}`,
    borderRadius: '10px',
    paddingInline: '20px',
    outline: 'none',
    color: isNightMode ? '#ffffff' : '#444444',
    fontSize: '14px'
  };

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    height: '250px',
    background: 'transparent',
    border: `2px solid ${isNightMode ? '#555555' : '#AAAAAA'}`,
    borderRadius: '10px',
    padding: '15px 20px',
    outline: 'none',
    resize: 'none',
    color: isNightMode ? '#ffffff' : '#444444',
    fontSize: '14px'
  };

  const formButtonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#00c9ff',
    color: '#ffffff',
    fontWeight: 500,
    padding: '12px 20px',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    fontSize: '16px'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    // Let Formspree handle the submission
    // The form will submit to https://formspree.io/f/movqddvv
    console.log('Form submitted:', formData);
    // Form will be reset by Formspree after successful submission
  };

  return (
    <section className="section" id="contact" style={sectionStyle}>
      <div className="top-header" style={topHeaderStyle}>
        <h1 style={topHeaderH1Style}>Get in touch</h1>
        <span style={topHeaderSpanStyle}>Do you have a project in your mind, contact me here</span>
      </div>
      <div className="row" style={rowStyle}>
        <div className="col" style={colStyle}>
          <div className="contact-info" style={contactInfoStyle}>
            <h2 style={contactInfoH2Style}>Find Me <Send size={18} style={{ transform: 'rotate(-45deg)', marginLeft: 4 }} /></h2>
            <p style={contactInfoPStyle}>
              <Sms style={contactInfoIStyle} /> Email: danielosho327@gmail.com
            </p>
            <p style={contactInfoPStyle}>
              <Call style={contactInfoIStyle} /> Tel: +234 901 110 3004
            </p>
          </div>
        </div>
        <div className="col" style={colStyle}>
          <div className="form-control" style={formControlStyle}>
            <form onSubmit={handleSubmit} action="https://formspree.io/f/movqddvv" method="POST">
              <div className="form-inputs" style={formInputsStyle}>
                <input
                  type="text"
                  name="name"
                  className="input-field"
                  placeholder="Name"
                  required
                  style={inputFieldStyle}
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Email"
                  required
                  style={inputFieldStyle}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-area">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  style={textareaStyle}
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-button">
                <button type="submit" style={formButtonStyle}>
                  Send <Send size={18} style={{ transform: 'rotate(-45deg)', marginLeft: 4 }} />
                </button>
              </div>
            </form>
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
            .contact-info {
              width: 100%;
            }
          }
          
          @media only screen and (max-width: 540px) {
            .form-inputs {
              flex-direction: column;
            }
            .input-field {
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Contact; 