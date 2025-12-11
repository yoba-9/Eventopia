import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#1a1a2e',
      color: '#ffffff',
      padding: '4rem 2rem 2rem',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '3rem',
      marginBottom: '3rem',
    },
    brandColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    footerLogo: {
      fontSize: '1.8rem',
      fontWeight: '800',
      margin: '0 0 1rem 0',
      background: 'linear-gradient(135deg, #ffffff, #a5b4fc)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    footerTagline: {
      color: '#cbd5e0',
      fontSize: '0.95rem',
      lineHeight: 1.6,
      marginBottom: '1.5rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '0.75rem',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '8px',
      backgroundColor: '#2d3748',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#ffffff',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
    linkColumn: {
      display: 'flex',
      flexDirection: 'column',
    },
    linkColumnTitle: {
      fontSize: '1.1rem',
      fontWeight: '600',
      margin: '0 0 1.25rem 0',
      color: '#ffffff',
    },
    linkList: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    linkItem: {
      margin: 0,
    },
    footerLink: {
      color: '#cbd5e0',
      textDecoration: 'none',
      fontSize: '0.95rem',
      transition: 'color 0.2s ease',
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: '1px solid #2d3748',
      color: '#a0aec0',
      fontSize: '0.9rem',
    },
    copyright: {
      margin: 0,
    },
  };

  const footerLinks = {
    discover: ['Events Near You', 'Online Events', 'Popular Events', 'Categories', 'Gift Cards'],
    organize: ['Create Events', 'Pricing', 'Resources', 'Community', 'Sell Tickets'],
    company: ['About Us', 'Careers', 'Press', 'Contact', 'Blog']
  };

  const socialPlatforms = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={20} />, 
      color: '#1877F2',
      url: 'https://facebook.com/eventopia'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      color: '#E4405F',
      url: 'https://instagram.com/eventopia'
    },
    { 
      name: 'X', 
      icon: (
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      color: '#000000',
      url: 'https://twitter.com/eventopia'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      color: '#0077B5',
      url: 'https://linkedin.com/company/eventopia'
    },
  ];

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.footerContent}>
          {/* Brand Column */}
          <div style={styles.brandColumn}>
            <h2 style={styles.footerLogo}>Eventopia</h2>
            <p style={styles.footerTagline}>
              Connecting people through unforgettable experiences since 2023.
            </p>
            <div style={styles.socialLinks}>
              {socialPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.socialIcon,
                    backgroundColor: platform.name === 'X' ? '#000000' : styles.socialIcon.backgroundColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = platform.color;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = platform.name === 'X' ? '#000000' : '#2d3748';
                    e.currentTarget.style.transform = 'none';
                  }}
                  aria-label={`Follow us on ${platform.name}`}
                >
                  {platform.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Discover Column */}
          <div style={styles.linkColumn}>
            <h4 style={styles.linkColumnTitle}>Discover</h4>
            <ul style={styles.linkList}>
              {footerLinks.discover.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.footerLink}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = styles.footerLink.color}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Organize Column */}
          <div style={styles.linkColumn}>
            <h4 style={styles.linkColumnTitle}>Organize</h4>
            <ul style={styles.linkList}>
              {footerLinks.organize.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.footerLink}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = styles.footerLink.color}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div style={styles.linkColumn}>
            <h4 style={styles.linkColumnTitle}>Company</h4>
            <ul style={styles.linkList}>
              {footerLinks.company.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.footerLink}
                    onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                    onMouseLeave={(e) => e.target.style.color = styles.footerLink.color}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>&copy; 2025 Eventopia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;