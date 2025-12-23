// components/PopularLocations.jsx
import React from 'react';

const PopularLocations = ({ locations }) => {
  const getLocationIcon = (name) => {
    if (name.includes('Addis')) return 'fas fa-city';
    if (name.includes('Hall')) return 'fas fa-building';
    if (name.includes('Theater')) return 'fas fa-theater-masks';
    return 'fas fa-map-pin';
  };

  const styles = {
    locationsSection: {
      marginBottom: '80px',
    },
    sectionHeader: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      marginBottom: '10px',
      color: '#2d3748',
      fontWeight: '800',
    },
    sectionSubtitle: {
      color: '#718096',
      fontSize: '1.1rem',
    },
    locationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '20px',
    },
    locationCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '25px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s',
      minHeight: '140px',
    },
    locationHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '15px',
    },
    locationIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '1.1rem',
    },
    locationInfo: {
      flex: 1,
    },
    locationName: {
      fontSize: '1.2rem',
      fontWeight: '700',
      color: '#2d3748',
      marginBottom: '4px',
    },
    locationCount: {
      color: '#718096',
      fontSize: '0.9rem',
    },
    locationButton: {
      width: '100%',
      background: '#edf2f7',
      color: '#4a5568',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '0.9rem',
      transition: 'background 0.3s',
      marginTop: '15px',
    },
  };

  return (
    <section style={styles.locationsSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Popular Event Locations</h2>
        <p style={styles.sectionSubtitle}>
          Discover events in these popular venues and cities
        </p>
      </div>
      
      <div style={styles.locationsGrid}>
        {locations.map(location => (
          <div 
            key={location.id} 
            style={styles.locationCard}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
          >
            <div style={styles.locationHeader}>
              <div style={styles.locationIcon}>
                <i className={getLocationIcon(location.name)}></i>
              </div>
              <div style={styles.locationInfo}>
                <h3 style={styles.locationName}>{location.name}</h3>
                <p style={styles.locationCount}>{location.eventCount} events</p>
              </div>
            </div>
            <button 
              style={styles.locationButton}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#edf2f7'}
            >
              Explore Events
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularLocations;