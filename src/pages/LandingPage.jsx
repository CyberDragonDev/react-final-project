import React from 'react';
import landingBg from '../assets/landing-bg.webp';
function LandingPage({ setPage }) {
  const landingStyle = {
    backgroundImage: `url(${landingBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    fontFamily: 'Arial, sans-serif',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box'
  };

  return (
    <div style={landingStyle}>
      <div style={overlayStyle}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '10px' }}>Welcome to Paradise Nursery</h1>
        <p style={{ fontSize: '1.5rem', margin: '10px 0' }}>Your local destination for all your plant needs!</p>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem', marginBottom: '30px' }}>
          Our mission is to provide you with the best plants and gardening advice. 
          Enjoy browsing our collection of indoor and outdoor plants, as well as our expert tips on how to care for them!
        </p>

        <button 
          onClick={() => setPage('products')}
          style={{ 
            padding: '15px 30px', 
            fontSize: '1.2rem', 
            backgroundColor: '#2E7D32', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default LandingPage;