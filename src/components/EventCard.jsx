// components/EventCard.jsx
import React from 'react';

const EventCard = ({ event }) => {
  const formatPrice = (price) => {
    if (price === 0) return 'Free';
    if (typeof price === 'string' && price.startsWith('From')) return price;
    return `ETB ${price.toLocaleString()}`;
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'music': return 'fas fa-music';
      case 'workshop': return 'fas fa-chalkboard-teacher';
      case 'art': return 'fas fa-palette';
      case 'food': return 'fas fa-utensils';
      case 'tech': return 'fas fa-laptop-code';
      case 'sports': return 'fas fa-running';
      default: return 'fas fa-calendar';
    }
  };

  const styles = {
    eventCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      position: 'relative',
      transition: 'transform 0.3s, box-shadow 0.3s',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    eventHeader: {
      marginBottom: '15px',
    },
    categoryBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 12px',
      backgroundColor: '#f7fafc',
      color: '#4a5568',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
      marginBottom: '12px',
    },
    categoryIcon: {
      fontSize: '0.7rem',
    },
    eventTitle: {
      fontSize: '1.4rem',
      marginBottom: '12px',
      color: '#2d3748',
      fontWeight: '700',
      lineHeight: 1.3,
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '15px',
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#718096',
      fontSize: '0.95rem',
    },
    detailIcon: {
      color: '#667eea',
      width: '16px',
      textAlign: 'center',
    },
    eventDescription: {
      color: '#4a5568',
      margin: '15px 0',
      lineHeight: 1.6,
      flex: 1,
    },
    eventFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid #e2e8f0',
    },
    priceContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    eventPrice: {
      fontSize: '1.3rem',
      fontWeight: '700',
    },
    priceFree: {
      color: '#48bb78',
    },
    pricePaid: {
      color: '#667eea',
    },
    priceLabel: {
      fontSize: '0.8rem',
      color: '#a0aec0',
      marginTop: '2px',
    },
    eventButton: {
      background: '#667eea',
      color: 'white',
      border: 'none',
      padding: '10px 25px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.95rem',
      transition: 'background 0.3s',
    },
    onlineBadge: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: '#48bb78',
      color: 'white',
      padding: '5px 15px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
  };

  return (
    <div 
      style={styles.eventCard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
      }}
    >
      <div style={styles.eventHeader}>
        <div style={styles.categoryBadge}>
          <i className={getCategoryIcon(event.category)} style={styles.categoryIcon}></i>
          {event.category?.charAt(0).toUpperCase() + event.category?.slice(1)}
        </div>
        <h3 style={styles.eventTitle}>{event.title}</h3>
        
        <div style={styles.eventDetails}>
          <div style={styles.detailRow}>
            <i className="fas fa-map-marker-alt" style={styles.detailIcon}></i>
            <span>{event.location}</span>
          </div>
          <div style={styles.detailRow}>
            <i className="far fa-clock" style={styles.detailIcon}></i>
            <span>{event.time}</span>
          </div>
        </div>
      </div>
      
      <p style={styles.eventDescription}>{event.description}</p>
      
      <div style={styles.eventFooter}>
        <div style={styles.priceContainer}>
          <span style={{
            ...styles.eventPrice,
            ...(event.price === 0 ? styles.priceFree : styles.pricePaid)
          }}>
            {formatPrice(event.price)}
          </span>
          <span style={styles.priceLabel}>
            {event.price === 0 ? 'No tickets required' : 'Per person'}
          </span>
        </div>
        <button 
          style={styles.eventButton}
          onMouseEnter={(e) => e.currentTarget.style.background = '#5a67d8'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#667eea'}
        >
          View Details
        </button>
      </div>
      
      {event.isOnline && (
        <div style={styles.onlineBadge}>
          <i className="fas fa-wifi"></i> Online
        </div>
      )}
    </div>
  );
};

export default EventCard;