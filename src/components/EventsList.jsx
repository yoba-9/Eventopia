// components/EventsList.jsx
import React from 'react';
import EventCard from './EventCard';

const EventsList = ({ events }) => {
  const styles = {
    eventsSection: {
      marginBottom: '60px',
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
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
    },
    noEvents: {
      gridColumn: '1 / -1',
      textAlign: 'center',
      padding: '60px 20px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
    },
    noEventsIcon: {
      fontSize: '4rem',
      color: '#cbd5e0',
      marginBottom: '20px',
    },
    noEventsTitle: {
      fontSize: '1.5rem',
      color: '#4a5568',
      marginBottom: '10px',
    },
    noEventsText: {
      color: '#718096',
      fontSize: '1rem',
    },
  };

  return (
    <section style={styles.eventsSection}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>Upcoming Events</h2>
        <p style={styles.sectionSubtitle}>
          Browse through hundreds of events happening soon
        </p>
      </div>
      
      <div style={styles.eventsGrid}>
        {events.length > 0 ? (
          events.map(event => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <div style={styles.noEvents}>
            <i className="fas fa-calendar-times" style={styles.noEventsIcon}></i>
            <h3 style={styles.noEventsTitle}>No events found</h3>
            <p style={styles.noEventsText}>Try changing your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsList;