import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  const styles = {
    header: {
      background: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Inter', -apple-system, sans-serif",
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      '&:hover': {
        opacity: 0.9,
      },
    },
    logoImage: {
      height: '36px',
      width: 'auto',
      objectFit: 'contain',
    },
    logoText: {
      color: '#1a1a2e',
      fontSize: '1.6rem',
      fontWeight: '700',
      margin: 0,
      letterSpacing: '-0.5px',
      position: 'relative',
    },
    logoDot: {
      color: '#000000ff',
    },
    navMenu: {
      display: 'flex',
      listStyle: 'none',
      gap: '2.5rem',
      margin: 0,
      padding: 0,
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      textDecoration: 'none',
      color: '#4a5568',
      fontWeight: '500',
      fontSize: '0.95rem',
      transition: 'color 0.2s ease',
      padding: '0.5rem 0',
      position: 'relative',
      display: 'block',
    },
    navLinkHover: {
      color: '#000000ff',
    },
    activeLink: {
      color: '#000000ff',
      fontWeight: '600',
    },
    underline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#000000ff',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
    },
    underlineHover: {
      transform: 'scaleX(1)',
    },
    underlineActive: {
      transform: 'scaleX(1)',
    },
    navActions: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    btnLogin: {
      background: 'transparent',
      color: '#4a5568',
      border: '1px solid #e2e8f0',
      padding: '0.6rem 1.25rem',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block',
      '&:hover': {
        borderColor: '#000000ff',
        color: '#000000ff',
        transform: 'translateY(-1px)',
      },
    },
    btnSignup: {
      background: '#000000ff',
      color: 'white',
      border: 'none',
      padding: '0.6rem 1.5rem',
      borderRadius: '6px',
      fontWeight: '500',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block',
      '&:hover': {
        background: '#3a0ca3',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(58, 12, 163, 0.2)',
      },
    },
  };

  // Helper function to check active route
  const isActive = (path) => {
    return window.location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/discover', label: 'Discover' },
    { path: '/create-event', label: 'Create Event' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
  ];

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <Link 
          to="/" 
          style={styles.logoContainer}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          <img 
            src="/logo.png" 
            alt="Eventopia Logo" 
            style={styles.logoImage}
            onError={(e) => {
              e.target.style.display = 'none';
              const fallbackDiv = document.createElement('div');
              fallbackDiv.style.cssText = `
                background: #4361ee;
                color: white;
                width: 32px;
                height: 32px;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 0.9rem;
              `;
              fallbackDiv.textContent = 'E';
              e.target.parentElement.insertBefore(fallbackDiv, e.target.parentElement.firstChild);
            }}
          />
          <h1 style={styles.logoText}>
            Event<span style={styles.logoDot}>opia</span>
          </h1>
        </Link>
        
        <ul style={styles.navMenu}>
          {navLinks.map((link, index) => (
            <li 
              key={link.path} 
              style={styles.navItem}
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.path.startsWith('#') ? (
                <a 
                  href={link.path}
                  style={{
                    ...styles.navLink,
                    ...(hoveredLink === link.path ? styles.navLinkHover : {}),
                    ...(isActive(link.path) ? styles.activeLink : {}),
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  to={link.path}
                  style={{
                    ...styles.navLink,
                    ...(hoveredLink === link.path ? styles.navLinkHover : {}),
                    ...(isActive(link.path) ? styles.activeLink : {}),
                  }}
                >
                  {link.label}
                </Link>
              )}
              
              {/* Animated underline */}
              <div 
                style={{
                  ...styles.underline,
                  ...((hoveredLink === link.path || isActive(link.path)) 
                    ? styles.underlineHover 
                    : {}),
                }}
              />
            </li>
          ))}
        </ul>
        
        <div style={styles.navActions}>
          <Link 
            to="/login"
            style={styles.btnLogin}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#000000ff';
              e.currentTarget.style.color = '#000000ff';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.color = '#4a5568';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Log in
          </Link>
          <Link 
            to="/signup"
            style={styles.btnSignup}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3a0ca3';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(58, 12, 163, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#000000ff';
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;