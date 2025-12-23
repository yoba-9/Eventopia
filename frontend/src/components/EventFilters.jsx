// components/EventFilters.jsx
import React from 'react';

const EventFilters = ({ activeFilter, onFilterChange, onCategoryChange, onDateChange }) => {
  const filters = [
    { id: 'all', label: 'All Events', icon: 'fas fa-calendar-alt' },
    { id: 'online', label: 'Online Events', icon: 'fas fa-wifi' },
    { id: 'free', label: 'Free Events', icon: 'fas fa-tag' },
    { id: 'today', label: 'Today', icon: 'fas fa-sun' },
    { id: 'weekend', label: 'This Weekend', icon: 'fas fa-umbrella-beach' },
    { id: 'near', label: 'Near You', icon: 'fas fa-map-marker-alt' }
  ];

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'music', label: 'Music & Concerts' },
    { value: 'workshop', label: 'Workshops & Classes' },
    { value: 'art', label: 'Art & Culture' },
    { value: 'food', label: 'Food & Drink' },
    { value: 'tech', label: 'Technology' },
    { value: 'sports', label: 'Sports & Fitness' },
    { value: 'business', label: 'Business & Networking' }
  ];

  const dateOptions = [
    { value: '', label: 'Any Date' },
    { value: 'today', label: 'Today' },
    { value: 'tomorrow', label: 'Tomorrow' },
    { value: 'weekend', label: 'This Weekend' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' }
  ];

  const styles = {
    filtersSection: {
      margin: '40px 0',
    },
    filterControls: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      marginBottom: '25px',
      alignItems: 'center',
    },
    filterGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
    filterLabel: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#4a5568',
      marginLeft: '5px',
    },
    filterDropdown: {
      padding: '12px 20px',
      border: '2px solid #e2e8f0',
      borderRadius: '8px',
      background: 'white',
      fontSize: '1rem',
      cursor: 'pointer',
      minWidth: '200px',
      transition: 'border-color 0.3s',
    },
    filterTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '15px',
    },
    filterTag: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      background: 'white',
      border: '2px solid #e2e8f0',
      borderRadius: '50px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    filterIcon: {
      fontSize: '0.8rem',
    },
  };

  return (
    <div style={styles.filtersSection}>
      <div style={styles.filterControls}>
        <div style={styles.filterGroup}>
          <label style={styles.filterLabel}>Category</label>
          <select 
            className="filter-dropdown"
            style={styles.filterDropdown}
            onChange={(e) => onCategoryChange(e.target.value)}
            defaultValue=""
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
        </div>
        
        <div style={styles.filterGroup}>
          <label style={styles.filterLabel}>Date</label>
          <select 
            className="filter-dropdown"
            style={styles.filterDropdown}
            onChange={(e) => onDateChange(e.target.value)}
            defaultValue=""
          >
            {dateOptions.map((date) => (
              <option key={date.value} value={date.value}>
                {date.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div style={styles.filterTags}>
        {filters.map(filter => (
          <button
            key={filter.id}
            style={{
              ...styles.filterTag,
              background: activeFilter === filter.id ? '#667eea' : 'white',
              color: activeFilter === filter.id ? 'white' : '#4a5568',
              borderColor: activeFilter === filter.id ? '#667eea' : '#e2e8f0',
            }}
            onClick={() => onFilterChange(filter.id)}
            onMouseEnter={(e) => {
              if (activeFilter !== filter.id) {
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.color = '#667eea';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter.id) {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.color = '#4a5568';
              }
            }}
          >
            <i className={filter.icon} style={styles.filterIcon}></i>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EventFilters;