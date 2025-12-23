import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const imageUrls = [
    'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&auto=format&fit=crop', // Concert crowd with lights
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop', // Festival stage with fireworks
    'https://images.unsplash.com/photo-1492684223066-e9e3b74d2c8e?w=1200&auto=format&fit=crop', // Music festival crowd
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideInterval = useRef(null);

  // Auto slide every 3 seconds (3000ms) with 0.5 second transition
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [imageUrls.length]);

  const styles = {
    hero: {
      position: 'relative',
      height: '600px',
      overflow: 'hidden',
      backgroundColor: '#1a1a2e',
    },
    slideshowContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
    },
    slide: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0,
      transition: 'opacity 0.5s ease-in-out', // Smooth 0.5 second fade
    },
    activeSlide: {
      opacity: 1,
      zIndex: 1,
    },
    contentOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 2,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroContent: {
      textAlign: 'center',
      color: 'white',
      maxWidth: '800px',
      padding: '0 2rem',
      zIndex: 3,
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      marginBottom: '1.5rem',
      lineHeight: 1.2,
    },
    firstLine: {
      display: 'block',
      fontSize: '3rem',
    },
    secondLine: {
      display: 'block',
      fontSize: '3.5rem',
      background: 'linear-gradient(90deg, #4cc9f0, #38b000)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    heroText: {
      fontSize: '1.25rem',
      marginBottom: '2rem',
      opacity: 0.9,
    },
    btnPrimary: {
      background: 'white',
      color: '#000000ff',
      padding: '1rem 2.5rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1.1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    },
    slideIndicators: {
      position: 'absolute',
      bottom: '30px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 4,
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    activeIndicator: {
      backgroundColor: 'white',
      transform: 'scale(1.2)',
    },
    slideCounter: {
      position: 'absolute',
      bottom: '30px',
      right: '30px',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      zIndex: 4,
    },
  };

  // Handle manual navigation
  const goToSlide = (index) => {
    clearInterval(slideInterval.current);
    setCurrentImageIndex(index);
    
    // Restart auto-slide after 3 seconds
    setTimeout(() => {
      slideInterval.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 3000);
    }, 3000);
  };

  return (
    <section style={styles.hero}>
      {/* Slideshow */}
      <div style={styles.slideshowContainer}>
        {imageUrls.map((url, index) => (
          <div
            key={index}
            style={{
              ...styles.slide,
              ...(index === currentImageIndex ? styles.activeSlide : {}),
              backgroundImage: `url(${url})`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div style={styles.contentOverlay}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            <span style={styles.firstLine}>Experience Unforgettable</span>
            <span style={styles.secondLine}>Moments</span>
          </h1>
          
          <p style={styles.heroText}>
            Discover the best concerts, festivals, and live performances in your city.<br />
            Book your tickets now and join the excitement!
          </p>
          
          <button 
            style={styles.btnPrimary}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'none';
              e.target.style.boxShadow = styles.btnPrimary.boxShadow;
            }}
          >
            Book Your Tickets Now
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={styles.slideIndicators}>
        {imageUrls.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.indicator,
              ...(index === currentImageIndex ? styles.activeIndicator : {}),
            }}
            onClick={() => goToSlide(index)}
            onMouseEnter={(e) => {
              if (index !== currentImageIndex) {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentImageIndex) {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              }
            }}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div style={styles.slideCounter}>
        {currentImageIndex + 1} / {imageUrls.length}
      </div>
    </section>
  );
};

export default Hero;