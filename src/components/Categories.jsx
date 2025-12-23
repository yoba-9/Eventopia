import React from 'react';
import { FaMusic, FaGraduationCap, FaBriefcase, FaUtensils, FaFootballBall, FaPalette } from 'react-icons/fa';

const Categories = () => {
  const styles = {
    categories: {
      padding: '5rem 2rem',
      background: '#f8f9fa',
    },
    categoriesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    categoryCard: {
      background: 'white',
      padding: '2rem',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    categoryIconContainer: {
      marginBottom: '1rem',
      display: 'flex',
      justifyContent: 'center',
    },
    categoryIcon: {
      fontSize: '2.5rem',
      color: '#4361ee',
    },
    categoryTitle: {
      marginBottom: '0.5rem',
      color: '#1a1a2e',
      fontSize: '1.3rem',
    },
    categoryDesc: {
      color: '#6c757d',
      fontSize: '0.9rem',
      margin: 0,
    },
  };

  const categories = [
    { id: 1, icon: <FaMusic style={styles.categoryIcon} />, title: 'Music', desc: 'Concerts, festivals, DJ nights' },
    { id: 2, icon: <FaGraduationCap style={styles.categoryIcon} />, title: 'Education', desc: 'Workshops, classes, seminars' },
    { id: 3, icon: <FaBriefcase style={styles.categoryIcon} />, title: 'Business', desc: 'Conferences, networking' },
    { id: 4, icon: <FaUtensils style={styles.categoryIcon} />, title: 'Food & Drink', desc: 'Tastings, food festivals' },
    { id: 5, icon: <FaFootballBall style={styles.categoryIcon} />, title: 'Sports', desc: 'Games, tournaments, races' },
    { id: 6, icon: <FaPalette style={styles.categoryIcon} />, title: 'Arts & Theater', desc: 'Shows, exhibitions, performances' },
  ];

  return (
    <section style={styles.categories}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem', color: '#1a1a2e' }}>
          Browse by Category
        </h2>
        <p style={{ textAlign: 'center', color: '#6c757d', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Find events that match your interests
        </p>
        
        <div style={styles.categoriesGrid}>
          {categories.map(category => (
            <div 
              key={category.id} 
              style={styles.categoryCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.categoryIconContainer}>{category.icon}</div>
              <h3 style={styles.categoryTitle}>{category.title}</h3>
              <p style={styles.categoryDesc}>{category.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;