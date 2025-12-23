// pages/Profile.jsx
import React, { useState } from 'react';

const Profile = () => {
  // User state
  const [user, setUser] = useState({
    name: 'Eyob Melaku',
    email: 'eyob@example.com',
    bio: 'Event organizer passionate about creating amazing experiences. I love music festivals, tech conferences, and community gatherings.',
    location: 'Addis Ababa, Ethiopia',
    phone: '+251 912 345 678',
    joinDate: 'March 2023',
    profileImage: null,
  });

  const [events, setEvents] = useState([
    { id: 1, title: 'Addis Tech Summit 2024', date: '2024-06-15', attendees: 1500, status: 'upcoming' },
    { id: 2, title: 'Ethio-Jazz Festival', date: '2024-05-20', attendees: 800, status: 'upcoming' },
    { id: 3, title: 'Startup Networking Mixer', date: '2024-04-10', attendees: 200, status: 'past' },
    { id: 4, title: 'Art Exhibition Opening', date: '2024-03-25', attendees: 350, status: 'past' },
  ]);

  const [tickets, setTickets] = useState([
    { id: 1, event: 'Addis Food Festival', date: '2024-07-10', price: 'ETB 500', status: 'active' },
    { id: 2, event: 'Music Concert', date: '2024-06-22', price: 'ETB 800', status: 'active' },
    { id: 3, event: 'Tech Workshop', date: '2024-05-15', price: 'Free', status: 'used' },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Main container styles
  const pageContainer = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingBottom: '50px',
  };

  // Header Section
  const headerSection = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '60px 0 40px',
    position: 'relative',
    overflow: 'hidden',
  };

  const headerContent = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
  };

  const profileInfo = {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
  };

  const profileImageContainer = {
    position: 'relative',
  };

  const profileImage = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    border: '5px solid rgba(255, 255, 255, 0.3)',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#667eea',
    fontWeight: '600',
    overflow: 'hidden',
  };

  const profileInitials = {
    fontSize: '3rem',
    fontWeight: '600',
  };

  const userDetails = {
    flex: 1,
  };

  const userName = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
  };

  const userEmail = {
    fontSize: '1.1rem',
    opacity: 0.9,
    marginBottom: '15px',
  };

  const userStats = {
    display: 'flex',
    gap: '30px',
    marginTop: '20px',
  };

  const statItem = {
    textAlign: 'center',
  };

  const statNumber = {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '5px',
  };

  const statLabel = {
    fontSize: '0.9rem',
    opacity: 0.8,
  };

  const editButton = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: 'white',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    padding: '10px 25px',
    borderRadius: '30px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  // Main Content
  const mainContent = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  // Tabs Navigation
  const tabsContainer = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '30px',
    overflow: 'hidden',
  };

  const tabs = {
    display: 'flex',
    overflowX: 'auto',
  };

  const tab = {
    padding: '20px 30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#666',
    cursor: 'pointer',
    borderBottom: '3px solid transparent',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  };

  const activeTabStyle = {
    color: '#667eea',
    borderBottom: '3px solid #667eea',
    backgroundColor: '#f8f9ff',
  };

  // Content Sections
  const contentSection = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    marginBottom: '30px',
  };

  const sectionTitle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '25px',
    color: '#2d3748',
  };

  // Overview Section
  const overviewGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  };

  const infoCard = {
    backgroundColor: '#f8f9fa',
    padding: '25px',
    borderRadius: '10px',
    borderLeft: '4px solid #667eea',
  };

  const infoTitle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#2d3748',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const infoContent = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
  };

  const infoItem = {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  // Events Section
  const eventsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  };

  const eventCard = {
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const eventHeader = {
    padding: '20px',
    backgroundColor: '#667eea',
    color: 'white',
  };

  const eventTitle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '5px',
  };

  const eventDate = {
    fontSize: '0.9rem',
    opacity: 0.9,
  };

  const eventBody = {
    padding: '20px',
  };

  const eventDetails = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  };

  const attendees = {
    fontSize: '0.9rem',
    color: '#4a5568',
  };

  const statusBadge = {
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  };

  const upcomingBadge = {
    backgroundColor: '#d1fae5',
    color: '#065f46',
  };

  const pastBadge = {
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  };

  // Tickets Section
  const ticketsList = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const ticketItem = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    border: '1px solid #e2e8f0',
    transition: 'transform 0.3s ease',
  };

  const ticketInfo = {
    flex: 1,
  };

  const ticketEvent = {
    fontSize: '1.1rem',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#2d3748',
  };

  const ticketDetails = {
    fontSize: '0.9rem',
    color: '#4a5568',
    display: 'flex',
    gap: '20px',
  };

  const ticketStatus = {
    padding: '5px 15px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
  };

  const activeStatus = {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
  };

  const usedStatus = {
    backgroundColor: '#f3f4f6',
    color: '#6b7280',
  };

  // Settings Section
  const settingsForm = {
    maxWidth: '600px',
  };

  const formGroup = {
    marginBottom: '25px',
  };

  const formLabel = {
    display: 'block',
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#2d3748',
  };

  const formInput = {
    width: '100%',
    padding: '12px 15px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
  };

  const textarea = {
    width: '100%',
    padding: '12px 15px',
    fontSize: '1rem',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'border-color 0.3s ease',
  };

  const formButtons = {
    display: 'flex',
    gap: '15px',
    marginTop: '30px',
  };

  const saveButton = {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const cancelButton = {
    backgroundColor: '#f0f2f5',
    color: '#4a5568',
    border: '2px solid #e2e8f0',
    padding: '12px 30px',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  // Empty State
  const emptyState = {
    textAlign: 'center',
    padding: '50px 20px',
    color: '#6b7280',
  };

  const emptyIcon = {
    fontSize: '3rem',
    marginBottom: '20px',
    opacity: 0.5,
  };

  const emptyText = {
    fontSize: '1.1rem',
    marginBottom: '10px',
  };

  const emptySubtext = {
    fontSize: '0.9rem',
    opacity: 0.7,
  };

  // Helper functions
  const handleSaveProfile = () => {
    setIsEditing(false);
    // In real app, you would save to backend here
    console.log('Profile saved:', user);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  const handleInputChange = (field, value) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div style={pageContainer}>
      {/* Header Section */}
      <section style={headerSection}>
        <div style={headerContent}>
          <div style={profileInfo}>
            <div style={profileImageContainer}>
              <div style={profileImage}>
                {user.profileImage ? (
                  <img 
                    src={user.profileImage} 
                    alt={user.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <div style={profileInitials}>
                    {getInitials(user.name)}
                  </div>
                )}
              </div>
            </div>
            
            <div style={userDetails}>
              <h1 style={userName}>{user.name}</h1>
              <p style={userEmail}>{user.email}</p>
              
              <div style={userStats}>
                <div style={statItem}>
                  <div style={statNumber}>{events.length}</div>
                  <div style={statLabel}>Events</div>
                </div>
                <div style={statItem}>
                  <div style={statNumber}>{tickets.length}</div>
                  <div style={statLabel}>Tickets</div>
                </div>
                <div style={statItem}>
                  <div style={statNumber}>{user.joinDate}</div>
                  <div style={statLabel}>Member Since</div>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            style={editButton}
            onClick={() => setIsEditing(true)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            ✏️ Edit Profile
          </button>
        </div>
      </section>

      {/* Main Content */}
      <div style={mainContent}>
        {/* Tabs Navigation */}
        <div style={tabsContainer}>
          <div style={tabs}>
            <div 
              style={{...tab, ...(activeTab === 'overview' ? activeTabStyle : {})}}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </div>
            <div 
              style={{...tab, ...(activeTab === 'events' ? activeTabStyle : {})}}
              onClick={() => setActiveTab('events')}
            >
              My Events ({events.length})
            </div>
            <div 
              style={{...tab, ...(activeTab === 'tickets' ? activeTabStyle : {})}}
              onClick={() => setActiveTab('tickets')}
            >
              My Tickets ({tickets.length})
            </div>
            <div 
              style={{...tab, ...(activeTab === 'settings' ? activeTabStyle : {})}}
              onClick={() => setActiveTab('settings')}
            >
              Settings
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div style={contentSection}>
            <h2 style={sectionTitle}>Profile Overview</h2>
            <div style={overviewGrid}>
              <div style={infoCard}>
                <h3 style={infoTitle}>👤 Personal Information</h3>
                <div style={infoContent}>
                  <div style={infoItem}>
                    <span style={{fontWeight: '600', minWidth: '80px'}}>Name:</span>
                    <span>{user.name}</span>
                  </div>
                  <div style={infoItem}>
                    <span style={{fontWeight: '600', minWidth: '80px'}}>Email:</span>
                    <span>{user.email}</span>
                  </div>
                  <div style={infoItem}>
                    <span style={{fontWeight: '600', minWidth: '80px'}}>Phone:</span>
                    <span>{user.phone}</span>
                  </div>
                  <div style={infoItem}>
                    <span style={{fontWeight: '600', minWidth: '80px'}}>Location:</span>
                    <span>{user.location}</span>
                  </div>
                </div>
              </div>
              
              <div style={infoCard}>
                <h3 style={infoTitle}>📝 About Me</h3>
                <div style={infoContent}>
                  <p>{user.bio}</p>
                </div>
              </div>
              
              <div style={infoCard}>
                <h3 style={infoTitle}>🎯 Quick Actions</h3>
                <div style={infoContent}>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <button style={{
                      padding: '12px',
                      backgroundColor: '#667eea',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}>
                      🎫 View All Tickets
                    </button>
                    <button style={{
                      padding: '12px',
                      backgroundColor: '#f0f2f5',
                      color: '#333',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}>
                      📅 Create New Event
                    </button>
                    <button style={{
                      padding: '12px',
                      backgroundColor: '#f0f2f5',
                      color: '#333',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}>
                      ⭐ Saved Events
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div style={contentSection}>
            <h2 style={sectionTitle}>My Events</h2>
            {events.length > 0 ? (
              <div style={eventsGrid}>
                {events.map(event => (
                  <div 
                    key={event.id}
                    style={eventCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={eventHeader}>
                      <h3 style={eventTitle}>{event.title}</h3>
                      <p style={eventDate}>{new Date(event.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</p>
                    </div>
                    <div style={eventBody}>
                      <div style={eventDetails}>
                        <div style={attendees}>
                          👥 {event.attendees.toLocaleString()} attendees
                        </div>
                        <div style={{
                          ...statusBadge,
                          ...(event.status === 'upcoming' ? upcomingBadge : pastBadge)
                        }}>
                          {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={emptyState}>
                <div style={emptyIcon}>📅</div>
                <p style={emptyText}>No events yet</p>
                <p style={emptySubtext}>Create your first event to get started</p>
              </div>
            )}
          </div>
        )}

        {/* Tickets Tab */}
        {activeTab === 'tickets' && (
          <div style={contentSection}>
            <h2 style={sectionTitle}>My Tickets</h2>
            {tickets.length > 0 ? (
              <div style={ticketsList}>
                {tickets.map(ticket => (
                  <div 
                    key={ticket.id}
                    style={ticketItem}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div style={ticketInfo}>
                      <h3 style={ticketEvent}>{ticket.event}</h3>
                      <div style={ticketDetails}>
                        <span>📅 {ticket.date}</span>
                        <span>💰 {ticket.price}</span>
                      </div>
                    </div>
                    <div style={{
                      ...ticketStatus,
                      ...(ticket.status === 'active' ? activeStatus : usedStatus)
                    }}>
                      {ticket.status === 'active' ? 'Active' : 'Used'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={emptyState}>
                <div style={emptyIcon}>🎫</div>
                <p style={emptyText}>No tickets yet</p>
                <p style={emptySubtext}>Purchase tickets for events to see them here</p>
              </div>
            )}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div style={contentSection}>
            <h2 style={sectionTitle}>Profile Settings</h2>
            <div style={settingsForm}>
              <div style={formGroup}>
                <label style={formLabel}>Full Name</label>
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  style={formInput}
                  disabled={!isEditing}
                />
              </div>
              
              <div style={formGroup}>
                <label style={formLabel}>Email Address</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  style={formInput}
                  disabled={!isEditing}
                />
              </div>
              
              <div style={formGroup}>
                <label style={formLabel}>Phone Number</label>
                <input
                  type="tel"
                  value={user.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  style={formInput}
                  disabled={!isEditing}
                />
              </div>
              
              <div style={formGroup}>
                <label style={formLabel}>Location</label>
                <input
                  type="text"
                  value={user.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  style={formInput}
                  disabled={!isEditing}
                />
              </div>
              
              <div style={formGroup}>
                <label style={formLabel}>Bio</label>
                <textarea
                  value={user.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  style={textarea}
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                />
              </div>
              
              {isEditing && (
                <div style={formButtons}>
                  <button
                    style={saveButton}
                    onClick={handleSaveProfile}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#5a6fd8';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#667eea';
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    style={cancelButton}
                    onClick={handleCancelEdit}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#e2e8f0';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#f0f2f5';
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;