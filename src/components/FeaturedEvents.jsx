import React from 'react';
import { Calendar, MapPin, Clock, Music, BookOpen, Utensils } from 'lucide-react';

const FeaturedEvents = () => {
  const events = [
    {
      id: 1,
      date: '15',
      month: 'JUN',
      title: 'Addis Music Fest',
      location: 'Kuriflu Central Park',
      time: '2:00 PM',
      description: 'The biggest music festival of the year featuring top artists from around Ethiopia.',
      price: 'From ETB 299.99',
      icon: <Music size={24} color="#000000ff" />,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&auto=format&fit=crop',
    },
    {
      id: 2,
      date: '22',
      month: 'JUN',
      title: 'Tech Innovation Summit',
      location: 'Tech Library Addis Abeba',
      time: '9:00 AM',
      description: 'Learn from industry leaders about the future of technology and innovation.',
      price: 'From ETB 199.99',
      icon: <BookOpen size={24} color="#000000ff" />,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop',
    },
    {
      id: 3,
      date: '08',
      month: 'JUL',
      title: 'Food & Wine Festival',
      location: 'Gebea Mall',
      time: '11:00 AM',
      description: 'Sample delicious foods from the best local restaurants and food trucks.',
      price: 'Free',
      icon: <Utensils size={24} color="#000000ff" />,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&auto=format&fit=crop',
    },
  ];

  const styles = {
    section: {
      padding: '5rem 2rem',
      backgroundColor: '#ffffff',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: '0.5rem',
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#4a5568',
      fontSize: '1.1rem',
      marginBottom: '3rem',
    },
    eventsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
    },
    eventCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      border: '1px solid #e2e8f0',
    },
    eventImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    eventContent: {
      padding: '1.5rem',
    },
    eventHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
    },
    eventDate: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      padding: '0.75rem',
      borderRadius: '8px',
      minWidth: '60px',
    },
    dateNumber: {
      fontSize: '1.5rem',
      fontWeight: '800',
      color: '#000000ff',
      lineHeight: 1,
    },
    dateMonth: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#4a5568',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
    },
    titleContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '0.5rem',
    },
    eventTitle: {
      fontSize: '1.4rem',
      fontWeight: '700',
      color: '#1a1a2e',
      margin: 0,
    },
    eventDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      marginBottom: '1.5rem',
    },
    detailRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#4a5568',
      fontSize: '0.95rem',
    },
    detailIcon: {
      opacity: 0.7,
    },
    eventDescription: {
      color: '#4a5568',
      lineHeight: 1.6,
      marginBottom: '1.5rem',
      fontSize: '0.95rem',
    },
    eventFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    price: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#000000ff',
    },
    btnBook: {
      backgroundColor: '#000000ff',
      color: '#ffffff',
      border: 'none',
      padding: '0.75rem 1.5rem',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '0.95rem',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Featured Events</h2>
        <p style={styles.sectionSubtitle}>Popular events you might like</p>
        
        <div style={styles.eventsGrid}>
          {events.map((event) => (
            <div 
              key={event.id} 
              style={styles.eventCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = styles.eventCard.boxShadow;
              }}
            >
              {/* Event Image */}
              <img 
                src={event.image} 
                alt={event.title}
                style={styles.eventImage}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallbackDiv = document.createElement('div');
                  fallbackDiv.style.cssText = `
                    width: 100%;
                    height: 200px;
                    background: linear-gradient(135deg, #000000ff, #000000ff);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: 700;
                    font-size: 1.2rem;
                  `;
                  fallbackDiv.textContent = event.title;
                  e.target.parentElement.insertBefore(fallbackDiv, e.target);
                }}
              />
              
              <div style={styles.eventContent}>
                <div style={styles.eventHeader}>
                  <div>
                    <div style={styles.titleContainer}>
                      {event.icon}
                      <h3 style={styles.eventTitle}>{event.title}</h3>
                    </div>
                  </div>
                  <div style={styles.eventDate}>
                    <span style={styles.dateNumber}>{event.date}</span>
                    <span style={styles.dateMonth}>{event.month}</span>
                  </div>
                </div>
                
                <div style={styles.eventDetails}>
                  <div style={styles.detailRow}>
                    <MapPin size={18} style={styles.detailIcon} />
                    <span>{event.location}</span>
                  </div>
                  <div style={styles.detailRow}>
                    <Clock size={18} style={styles.detailIcon} />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <p style={styles.eventDescription}>{event.description}</p>
                
                <div style={styles.eventFooter}>
                  <span style={styles.price}>{event.price}</span>
                  <button 
                    style={styles.btnBook}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#3a0ca3';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = styles.btnBook.backgroundColor;
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;