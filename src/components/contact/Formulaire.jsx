import React from 'react';

function Formulaire() {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',     
    width: '100%',            
    minHeight: '60vh',       
    padding: '0',             
    margin: '0 auto',         
    boxSizing: 'border-box',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2vh',
    padding: '4vh',
    borderRadius: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.03)', 
    backdropFilter: 'blur(10px)',
    border: '3px solid rgba(255, 255, 255, 0.1)',
    color: 'white',
    fontFamily: 'Satoshi',
    width: '90%',            
    maxWidth: '700px',       
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    margin: '0 auto', 
  };

  const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5vh',
    textAlign: 'left',
  };

  const inputStyle = {
    padding: '1.5vh',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: 'white',
    fontFamily: 'Satoshi',
    fontSize: '2vh',
    outline: 'none',
  };

  const buttonStyle = {
    marginTop: '1.5vh',
    padding: '1.5vh',
    borderRadius: '12px',
    border: 'none',
    backgroundColor: '#C8272F',
    color: 'white',
    fontFamily: 'Satoshi',
    fontSize: '2vh',
    fontWeight: '600',
    cursor: 'pointer',
  };

  return (
    <div style={sectionStyle}>
      <form 
        action="https://formspree.io/f/mqayndjk" 
        method="post" 
        style={containerStyle}
      >
        <h2 style={{ fontSize: '4vh', marginBottom: '1vh', fontWeight: '700', textAlign: 'center' }}>
          Get in <span style={{ color: '#C8272F' }}>touch</span>
        </h2>

        <div style={inputGroupStyle}>
          <label htmlFor="prenom" style={{ fontSize: '2vh', fontWeight: "500", opacity: 0.8 }}>Name</label>
          <input type="text" id="prenom" name="prenom" required style={inputStyle} placeholder="Your Name" />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={{ fontSize: '2vh', fontWeight: "500", opacity: 0.8 }}>Email</label>
          <input type="email" id="email" name="email" required style={inputStyle} placeholder="your@email.com" />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="sujet" style={{ fontSize: '2vh', fontWeight: "500", opacity: 0.8 }}>Subject</label>
          <input type="text" id="sujet" name="sujet" required style={inputStyle} placeholder="What's this about?" />
        </div>

        <button type="submit" style={buttonStyle}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Formulaire; 