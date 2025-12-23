// pages/Discover.jsx
import React, { useState } from 'react';
import EventFilters from '../components/EventFilters';
import EventsList from '../components/EventsList';
import PopularLocations from '../components/PopularLocations';
import { eventsData, locationsData } from '../data/eventsData';

// Import placeholder images - you should replace these with actual images
import ethioJazzImage from '../assets/ethio-jazz.jpg';
import startupImage from '../assets/startup-workshop.jpg';
import artImage from '../assets/art-exhibition.jpg';
import foodFestivalImage from '../assets/food-festival.jpg';
import techSummitImage from '../assets/tech-summit.jpg';
import runningImage from '../assets/running-event.jpg';

const Discover = () => {
  const [events, setEvents] = useState(eventsData);
  const [filteredEvents, setFilteredEvents] = useState(eventsData);
  const [activeFilter, setActiveFilter] = useState('all');

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredEvents(events);
      return;
    }
    
    const filtered = events.filter(event => 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredEvents(filtered);
  };

  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    let filtered = events;
    
    switch(filterType) {
      case 'online':
        filtered = events.filter(event => event.isOnline);
        break;
      case 'free':
        filtered = events.filter(event => event.price === 0);
        break;
      case 'today':
        // Simulate today's events
        filtered = events.slice(0, 3);
        break;
      case 'weekend':
        // Simulate weekend events
        filtered = events.filter(event => event.price < 1000);
        break;
      case 'near':
        // Simulate nearby events
        filtered = events.filter(event => event.location.includes('Meskel') || event.location.includes('Addis'));
        break;
      default:
        filtered = events;
    }
    
    setFilteredEvents(filtered);
  };

  const handleCategoryChange = (category) => {
    if (!category) {
      setFilteredEvents(events);
      return;
    }
    const filtered = events.filter(event => 
      event.category?.toLowerCase() === category.toLowerCase()
    );
    setFilteredEvents(filtered.length ? filtered : events);
  };

  const handleDateChange = (date) => {
    if (!date) {
      setFilteredEvents(events);
      return;
    }
    console.log('Date filter:', date);
  };

  const upcomingEventsSection = {
    marginBottom: '60px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  };

  const sectionHeader = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px',
  };

  const sectionTitle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#333',
    flex: 1,
  };

  const browseButton = {
    backgroundColor: '#f0f2f5',
    color: '#333',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    transition: 'all 0.3s ease',
  };

  const sectionSubtitle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  };

  const divider = {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '30px 0',
  };

  const eventCard = {
    display: 'flex',
    marginBottom: '30px',
    paddingBottom: '30px',
    borderBottom: '1px solid #f0f0f0',
    gap: '20px',
  };

  const eventImage = {
    width: '120px',
    height: '120px',
    borderRadius: '8px',
    objectFit: 'cover',
    flexShrink: 0,
  };

  const eventDetails = {
    flex: 1,
  };

  const eventTitle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#333',
  };

  const eventLocation = {
    fontSize: '0.95rem',
    color: '#666',
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const locationIcon = {
    color: '#888',
  };

  const eventTime = {
    fontSize: '0.9rem',
    color: '#888',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const clockIcon = {
    color: '#667eea',
  };

  const eventDescription = {
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '15px',
  };

  const eventPrice = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#667eea',
  };

  const pagination = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    gap: '5px',
  };

  const paginationButton = {
    padding: '8px 12px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    minWidth: '40px',
    textAlign: 'center',
  };

  const activePaginationButton = {
    backgroundColor: '#667eea',
    color: 'white',
    borderColor: '#667eea',
  };

  const nextButton = {
    padding: '8px 15px',
    border: '1px solid #ddd',
    backgroundColor: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
  };

  // Popular Locations Section Styles - ROW FORMAT
  const popularLocationsSection = {
    marginBottom: '60px',
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '30px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  };

  const locationsHeader = {
    textAlign: 'center',
    marginBottom: '10px',
  };

  const locationsTitle = {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#333',
  };

  const locationsSubtitle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  };

  const locationsDivider = {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '30px 0',
  };

  const locationsRow = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
  };

  const locationItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    flex: '1 1 180px',
    minWidth: '180px',
    padding: '20px 15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  };

  const locationIconWrapper = {
    fontSize: '2rem',
    color: '#667eea',
    marginBottom: '15px',
  };

  const locationName = {
    fontSize: '1.1rem',
    fontWeight: '700',
    color: '#333',
    marginBottom: '8px',
  };

  const locationCount = {
    fontSize: '1rem',
    color: '#667eea',
    fontWeight: '500',
  };

  const styles = {
    discoverPage: {
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      paddingTop: '40px',
    },
    pageHeader: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '60px 0',
      textAlign: 'center',
      marginBottom: '40px',
    },
    headerContent: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '0 20px',
    },
    pageTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '15px',
    },
    pageSubtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
      marginBottom: '40px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 60px',
    },
    searchForm: {
      marginTop: '30px',
    },
    searchContainer: {
      display: 'flex',
      background: 'white',
      borderRadius: '50px',
      padding: '5px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    },
    searchIcon: {
      padding: '15px 20px',
      color: '#764ba2',
    },
    searchInput: {
      flex: 1,
      border: 'none',
      outline: 'none',
      fontSize: '1rem',
      padding: '10px',
    },
    searchBtn: {
      background: '#667eea',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      padding: '15px 40px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background 0.3s',
    },
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.search.value;
    handleSearch(searchTerm);
  };

  return (
    <div style={styles.discoverPage}>
      <div style={styles.pageHeader}>
        <div style={styles.headerContent}>
          <h1 style={styles.pageTitle}>Discover Amazing Events</h1>
          <p style={styles.pageSubtitle}>
            Find concerts, conferences, workshops and more that match your interests
          </p>
          <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
            <div style={styles.searchContainer}>
              <i className="fas fa-search" style={styles.searchIcon}></i>
              <input 
                type="text" 
                name="search"
                placeholder="Search for events, artists, or venues..."
                style={styles.searchInput}
              />
              <button type="submit" style={styles.searchBtn}>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div style={styles.container}>
        <EventFilters 
          activeFilter={activeFilter}
          onFilterChange={handleFilter}
          onCategoryChange={handleCategoryChange}
          onDateChange={handleDateChange}
        />
        
        {/* Upcoming Events Section */}
        <div style={upcomingEventsSection}>
          <div style={sectionHeader}>
            <h2 style={sectionTitle}>Upcoming Events</h2>
            <button style={browseButton}>
              Browse All
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
          <p style={sectionSubtitle}>Browse through hundreds of events happening soon</p>
          <div style={divider}></div>
          
          {/* Event 1 */}
          <div style={eventCard}>
            <img 
              src={ethioJazzImage} 
              alt="Ethio-Jazz Night"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Ethio-Jazz Night with Samuel Yirga</h3>
              <div style={eventLocation}>
                <i className="fas fa-map-marker-alt" style={locationIcon}></i>
                Alliance Ethio-Française
              </div>
              <div style={eventTime}>
                <i className="fas fa-clock" style={clockIcon}></i>
                7:20 PM
              </div>
              <p style={eventDescription}>
                An evening of mesmerizing Ethio-jazz with the renowned pianist Samuel Yirga and his band.
              </p>
              <div style={eventPrice}>From ETB 350.00</div>
            </div>
          </div>
          
          {/* Event 2 */}
          <div style={eventCard}>
            <img 
              src={startupImage} 
              alt="Startup Funding Workshop"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Startup Funding Workshop</h3>
              <div style={eventLocation}>
                <i className="fas fa-map-marker-alt" style={locationIcon}></i>
                Ice Addis
              </div>
              <div style={eventTime}>
                <i className="fas fa-clock" style={clockIcon}></i>
                9:00 AM
              </div>
              <p style={eventDescription}>
                Learn how to secure funding for your startup from experienced investors and entrepreneurs.
              </p>
              <div style={eventPrice}>ETB 500.00</div>
            </div>
          </div>
          
          {/* Event 3 */}
          <div style={eventCard}>
            <img 
              src={artImage} 
              alt="Contemporary Art Exhibition"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=400&h=300&fit=crop';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Contemporary Art Exhibition</h3>
              <div style={eventLocation}>
                <i className="fas fa-map-marker-alt" style={locationIcon}></i>
                Modern Art Museum
              </div>
              <div style={eventTime}>
                <i className="fas fa-clock" style={clockIcon}></i>
                10:00 AM - 6:00 PM
              </div>
              <p style={eventDescription}>
                Showcasing works from emerging Ethiopian contemporary artists exploring identity and modernity.
              </p>
              <div style={eventPrice}>Free</div>
            </div>
          </div>
          
          {/* Event 4 */}
          <div style={eventCard}>
            <img 
              src={foodFestivalImage} 
              alt="Addie International Food Festival"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Addie International Food Festival</h3>
              <div style={eventLocation}>
                <i className="fas fa-map-marker-alt" style={locationIcon}></i>
                Eventopia
              </div>
              <p style={eventDescription}>
                at this annual food festival featuring 50+ vendors.
              </p>
              <div style={eventPrice}>ETB 100.00 entry</div>
            </div>
          </div>
          
          {/* Event 5 */}
          <div style={eventCard}>
            <img 
              src={techSummitImage} 
              alt="Addie Tech Summit 2025"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Addie Tech Summit 2025</h3>
              <p style={eventDescription}>
                featuring keynote speakers, workshops, and networking.
              </p>
              <div style={eventPrice}>From ETB 1,500.00</div>
            </div>
          </div>
          
          {/* Event 6 */}
          <div style={{...eventCard, borderBottom: 'none', paddingBottom: '0'}}>
            <img 
              src={runningImage} 
              alt="Great Ethiopian Run 10K"
              style={eventImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://www.fidelethiopiatour.com/wp-content/uploads/2025/02/ethiopian-greate-run-2.jpg';
              }}
            />
            <div style={eventDetails}>
              <h3 style={eventTitle}>Great Ethiopian Run 10K</h3>
              <p style={eventDescription}>
                popular road race through the heart of Addis Ababa.
              </p>
              <div style={eventPrice}>ETB 300.00</div>
            </div>
          </div>
          
          {/* Pagination */}
          <div style={pagination}>
            <button style={{...paginationButton, ...activePaginationButton}}>1</button>
            <button style={paginationButton}>2</button>
            <button style={paginationButton}>3</button>
            <button style={paginationButton}>4</button>
            <button style={paginationButton}>5</button>
            <button style={nextButton}>Next &gt;</button>
          </div>
        </div>
        
        {/* Popular Event Locations Section - ROW FORMAT */}
        <div style={popularLocationsSection}>
          <div style={locationsHeader}>
            <h2 style={locationsTitle}>Popular Event Locations</h2>
            <p style={locationsSubtitle}>
              Discover events in these popular venues and cities
            </p>
          </div>
          <div style={locationsDivider}></div>
          
          <div style={locationsRow}>
            {/* Addis Ababa */}
            <div style={locationItem}>
              <div style={locationIconWrapper}>
                <i className="fas fa-city"></i>
              </div>
              <div style={locationName}>Addis Ababa</div>
              <div style={locationCount}>1,200+ events</div>
            </div>
            
            {/* Bahir Dar */}
            <div style={locationItem}>
              <div style={locationIconWrapper}>
                <i className="fas fa-water"></i>
              </div>
              <div style={locationName}>Bahir Dar</div>
              <div style={locationCount}>300+ events</div>
            </div>
            
            {/* Hawassa */}
            <div style={locationItem}>
              <div style={locationIconWrapper}>
                <i className="fas fa-fish"></i>
              </div>
              <div style={locationName}>Hawassa</div>
              <div style={locationCount}>250+ events</div>
            </div>
            
            {/* National Theater */}
            <div style={locationItem}>
              <div style={locationIconWrapper}>
                <i className="fas fa-theater-masks"></i>
              </div>
              <div style={locationName}>National Theater</div>
              <div style={locationCount}>180+ events</div>
            </div>
            
            {/* Millennium Hall */}
            <div style={locationItem}>
              <div style={locationIconWrapper}>
                <i className="fas fa-building"></i>
              </div>
              <div style={locationName}>Millennium Hall</div>
              <div style={locationCount}>150+ events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;