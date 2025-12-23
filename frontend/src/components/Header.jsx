import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = ({ isAuthenticated, onLogout }) => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  
  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);
  
  const handleLogout = () => {
    onLogout();
    setIsMobileMenuOpen(false);
    navigate('/');
  };
  
  const styles = {
    header: {
      background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#fff',
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      fontFamily: "'Inter', -apple-system, sans-serif",
      transition: 'all 0.3s ease',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        padding: '1rem',
      },
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
      zIndex: 1001,
    },
    logoImage: {
      height: '36px',
      width: 'auto',
      objectFit: 'contain',
      '@media (max-width: 768px)': {
        height: '32px',
      },
    },
    logoText: {
      color: '#1a1a2e',
      fontSize: '1.6rem',
      fontWeight: '700',
      margin: 0,
      letterSpacing: '-0.5px',
      '@media (max-width: 768px)': {
        fontSize: '1.4rem',
      },
    },
    logoDot: {
      color: '#000000',
    },
    navMenu: {
      display: 'flex',
      listStyle: 'none',
      gap: '2.5rem',
      margin: 0,
      padding: 0,
      '@media (max-width: 992px)': {
        gap: '1.5rem',
      },
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    navMenuMobile: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: '70px',
      left: 0,
      right: 0,
      background: '#fff',
      padding: '2rem',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      listStyle: 'none',
      margin: 0,
      gap: '1.5rem',
      transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
      opacity: isMobileMenuOpen ? 1 : 0,
      transition: 'all 0.3s ease',
      pointerEvents: isMobileMenuOpen ? 'all' : 'none',
      zIndex: 999,
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
      '@media (max-width: 768px)': {
        fontSize: '1.1rem',
        padding: '0.75rem 0',
        borderBottom: '1px solid #f1f1f1',
      },
    },
    navLinkHover: {
      color: '#000000',
    },
    activeLink: {
      color: '#000000',
      fontWeight: '600',
    },
    underline: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: '#000000',
      transform: 'scaleX(0)',
      transition: 'transform 0.3s ease',
      '@media (max-width: 768px)': {
        display: 'none',
      },
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
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    navActionsMobile: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      marginTop: '2rem',
      paddingTop: '2rem',
      borderTop: '1px solid #f1f1f1',
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
      textAlign: 'center',
      minWidth: '100px',
      '&:hover': {
        borderColor: '#000000',
        color: '#000000',
        transform: 'translateY(-1px)',
      },
      '@media (max-width: 768px)': {
        width: '100%',
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
      },
    },
    btnSignup: {
      background: '#000000',
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
      textAlign: 'center',
      minWidth: '100px',
      '&:hover': {
        background: '#333333',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      },
      '@media (max-width: 768px)': {
        width: '100%',
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
      },
    },
    btnLogout: {
      background: '#dc2626',
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
      textAlign: 'center',
      minWidth: '100px',
      '&:hover': {
        background: '#b91c1c',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(220, 38, 38, 0.2)',
      },
      '@media (max-width: 768px)': {
        width: '100%',
        padding: '0.8rem 1.5rem',
        fontSize: '1rem',
      },
    },
    hamburgerButton: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '0.5rem',
      zIndex: 1001,
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
    hamburgerIcon: {
      display: 'block',
      width: '24px',
      height: '2px',
      background: isMobileMenuOpen ? 'transparent' : '#1a1a2e',
      position: 'relative',
      transition: 'background 0.3s ease',
      '&::before, &::after': {
        content: '""',
        position: 'absolute',
        width: '24px',
        height: '2px',
        background: '#1a1a2e',
        left: 0,
        transition: 'all 0.3s ease',
      },
      '&::before': {
        top: isMobileMenuOpen ? '0' : '-6px',
        transform: isMobileMenuOpen ? 'rotate(45deg)' : 'none',
      },
      '&::after': {
        bottom: isMobileMenuOpen ? '0' : '-6px',
        transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'none',
      },
    },
  };

  // Helper function to check active route
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/discover', label: 'Discover' },
    { path: '/create-event', label: 'Create Event' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/about', label: 'About' },
  ];

  // Add profile link if authenticated
  if (isAuthenticated) {
    navLinks.push({ path: '/profile', label: 'Profile' });
  }

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
        
        {/* Desktop Navigation */}
        <ul style={styles.navMenu}>
          {navLinks.map((link) => (
            <li 
              key={link.path} 
              style={styles.navItem}
              onMouseEnter={() => setHoveredLink(link.path)}
              onMouseLeave={() => setHoveredLink(null)}
            >
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
        
        {/* Desktop Action Buttons */}
        <div style={styles.navActions}>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              style={styles.btnLogout}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b91c1c';
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(220, 38, 38, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#dc2626';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link 
                to="/login"
                style={styles.btnLogin}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#000000';
                  e.currentTarget.style.color = '#000000';
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
                  e.currentTarget.style.background = '#333333';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#000000';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        
        {/* Hamburger Button for Mobile */}
        <button 
          style={styles.hamburgerButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={styles.hamburgerIcon} />
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <ul style={styles.navMenuMobile}>
        {navLinks.map((link) => (
          <li 
            key={`mobile-${link.path}`} 
            style={styles.navItem}
          >
            <Link 
              to={link.path}
              style={{
                ...styles.navLink,
                ...(isActive(link.path) ? styles.activeLink : {}),
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
        
        {/* Mobile Action Buttons */}
        <div style={styles.navActionsMobile}>
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              style={styles.btnLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link 
                to="/login"
                style={styles.btnLogin}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                to="/signup"
                style={styles.btnSignup}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </ul>
    </header>
  );
};

export default Header;