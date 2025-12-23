// pages/About.jsx
import React from 'react';

const About = () => {
  // Main container styles
  const pageContainer = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
  };

  // Hero Section
  const heroSection = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '100px 0 80px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const heroContent = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  };

  const heroTitle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '20px',
    lineHeight: '1.2',
  };

  const heroSubtitle = {
    fontSize: '1.3rem',
    opacity: 0.9,
    maxWidth: '800px',
    margin: '0 auto 40px',
  };

  // Section Styles
  const section = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
  };

  const sectionTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '40px',
    textAlign: 'center',
    position: 'relative',
  };

  const sectionTitleUnderline = {
    width: '80px',
    height: '4px',
    backgroundColor: '#667eea',
    margin: '10px auto 30px',
    borderRadius: '2px',
  };

  const sectionContent = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  // Who We Are Section
  const whoWeAreSection = {
    backgroundColor: 'white',
  };

  const introText = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#4a5568',
    marginBottom: '40px',
    textAlign: 'center',
  };

  // Mission & Vision Cards
  const cardGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginTop: '50px',
  };

  const card = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px 30px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
  };

  const cardIcon = {
    fontSize: '3rem',
    color: '#667eea',
    marginBottom: '25px',
  };

  const cardTitle = {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '20px',
  };

  const cardContent = {
    fontSize: '1.1rem',
    color: '#4a5568',
    lineHeight: '1.6',
  };

  // Values Section
  const valuesSection = {
    backgroundColor: '#f7fafc',
  };

  const valuesGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '40px',
  };

  const valueCard = {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const valueIcon = {
    fontSize: '2.5rem',
    color: '#667eea',
    marginBottom: '20px',
  };

  const valueTitle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2d3748',
    marginBottom: '15px',
  };

  const valueDescription = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
  };

  // Team Section
  const teamSection = {
    backgroundColor: 'white',
  };

  const teamGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '40px',
    marginTop: '50px',
  };

  const teamCard = {
    backgroundColor: '#f7fafc',
    borderRadius: '12px',
    padding: '30px',
    textAlign: 'center',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.3s ease',
  };

  const teamMemberImage = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    margin: '0 auto 20px',
    backgroundColor: '#e2e8f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#667eea',
    fontWeight: '600',
  };

  const teamMemberName = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '10px',
  };

  const teamMemberRole = {
    fontSize: '1.1rem',
    color: '#667eea',
    fontWeight: '600',
    marginBottom: '20px',
  };

  const teamMemberBio = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '20px',
  };

  const socialLinks = {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px',
  };

  const socialIcon = {
    color: '#718096',
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  // Stats Section
  const statsSection = {
    backgroundColor: '#667eea',
    color: 'white',
  };

  const statsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    textAlign: 'center',
  };

  const statNumber = {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '10px',
  };

  const statLabel = {
    fontSize: '1.2rem',
    opacity: 0.9,
  };

  // Journey Timeline
  const timelineSection = {
    backgroundColor: '#f7fafc',
  };

  const timelineContainer = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 0',
  };

  const timelineItem = {
    display: 'flex',
    marginBottom: '40px',
    position: 'relative',
  };

  const timelineYear = {
    minWidth: '100px',
    fontWeight: '700',
    color: '#667eea',
    fontSize: '1.3rem',
    paddingRight: '30px',
    textAlign: 'right',
  };

  const timelineContent = {
    flex: 1,
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
    position: 'relative',
    marginLeft: '30px',
  };

  const timelineLine = {
    position: 'absolute',
    left: '100px',
    top: '0',
    bottom: '0',
    width: '2px',
    backgroundColor: '#e2e8f0',
  };

  const timelineDot = {
    position: 'absolute',
    left: '97px',
    top: '0',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#667eea',
    zIndex: 2,
  };

  // CTA Section
  const ctaSection = {
    backgroundColor: '#2d3748',
    color: 'white',
    textAlign: 'center',
  };

  const ctaTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
  };

  const ctaSubtitle = {
    fontSize: '1.2rem',
    opacity: 0.9,
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto 40px',
  };

  const ctaButtons = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  const primaryButton = {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '16px 40px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const secondaryButton = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid #667eea',
    padding: '16px 40px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  // Data
  const teamMembers = [
    {
      name: 'Eyob Melaku',
      role: 'CEO & Founder',
      bio: 'Former tech leader with 10+ years in event technology, passionate about creating seamless event experiences as an event organizer.',
      initials: 'EM',
    },
    {
      name: 'Firehiwot Lemma',
      role: 'CTO',
      bio: 'Tech visionary with background in engineering and computer science, overseeing our technical architecture and ensuring scalable, secure platform.',
      initials: 'FL',
    },
    {
      name: 'Elsabeth Wondimu',
      role: 'COO',
      bio: 'Operations expert with focus on customer satisfaction and process optimization, committed to delivering exceptional event experiences.',
      initials: 'EW',
    },
  ];

  const values = [
    {
      title: 'Community',
      description: 'Building connections and fostering relationships through shared experiences.',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our platform to deliver cutting-edge event solutions.',
    },
    {
      title: 'Accessibility',
      description: 'Making event discovery and management available to everyone, everywhere.',
    },
    {
      title: 'Joy',
      description: 'Creating memorable experiences that bring happiness to organizers and attendees.',
    },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Our Beginning',
      description: 'Started with a mission to make event discovery and evolution accessible for everyone.',
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Launched Eventopia, beginning with local events in Addis Ababa.',
    },
    {
      year: '2023',
      title: 'National Expansion',
      description: 'Expanded to major cities across Ethiopia, serving thousands of events.',
    },
    {
      year: '2024',
      title: 'Features Evolution',
      description: 'Introduced advanced event management tools and mobile applications.',
    },
  ];

  const stats = [
    { number: '50K+', label: 'Events Hosted' },
    { number: '1M+', label: 'Active Users' },
    { number: '120+', label: 'Cities Covered' },
    { number: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <div style={pageContainer}>
      {/* Hero Section */}
      <section style={heroSection}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Our Story</h1>
          <p style={heroSubtitle}>
            Connecting people through shared experiences since 2021. We're on a mission to make event 
            discovery and organization accessible for everyone.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={{ ...section, ...whoWeAreSection }}>
        <h2 style={sectionTitle}>Who We Are</h2>
        <div style={sectionTitleUnderline}></div>
        <div style={sectionContent}>
          <p style={introText}>
            <strong>Eventopia</strong> was founded in 2022 with a mission to make event discovery and 
            organization accessible for everyone. What started as a small platform for local events 
            has grown into Ethiopia's leading event ecosystem. Our platform combines cutting-edge 
            technology with exceptional customer service to ensure every event launched through our 
            platform succeeds and creates meaningful experiences.
          </p>
          <p style={introText}>
            We believe in the power of shared experiences to bring people together, build communities, 
            and create lasting memories. Every event on our platform is an opportunity to connect, 
            celebrate, and grow together.
          </p>
        </div>

        <div style={cardGrid}>
          <div style={card}>
            <div style={cardIcon}>🎯</div>
            <h3 style={cardTitle}>Our Mission</h3>
            <p style={cardContent}>
              To democratize event access by providing tools that simplify event discovery, 
              creation, and management for everyone, from individuals to large organizations.
            </p>
          </div>
          
          <div style={card}>
            <div style={cardIcon}>🌍</div>
            <h3 style={cardTitle}>Our Vision</h3>
            <p style={cardContent}>
              To become the world's leading platform for creating meaningful, shared experiences, 
              fostering community growth and cultural development across Ethiopia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ ...section, ...valuesSection }}>
        <h2 style={sectionTitle}>Our Values</h2>
        <div style={sectionTitleUnderline}></div>
        <div style={valuesGrid}>
          {values.map((value, index) => (
            <div key={index} style={valueCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
              }}
            >
              <div style={valueIcon}>
                {value.title === 'Community' && '🤝'}
                {value.title === 'Innovation' && '💡'}
                {value.title === 'Accessibility' && '🌐'}
                {value.title === 'Joy' && '✨'}
              </div>
              <h3 style={valueTitle}>{value.title}</h3>
              <p style={valueDescription}>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ ...section, ...timelineSection }}>
        <h2 style={sectionTitle}>Our Journey</h2>
        <div style={sectionTitleUnderline}></div>
        <div style={timelineContainer}>
          <div style={timelineLine}></div>
          {timeline.map((item, index) => (
            <div key={index} style={timelineItem}>
              <div style={timelineYear}>{item.year}</div>
              <div style={timelineDot}></div>
              <div style={timelineContent}>
                <h3 style={{ margin: '0 0 10px 0', color: '#2d3748' }}>{item.title}</h3>
                <p style={{ margin: 0, color: '#4a5568' }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ ...section, ...statsSection }}>
        <div style={statsGrid}>
          {stats.map((stat, index) => (
            <div key={index}>
              <div style={statNumber}>{stat.number}</div>
              <div style={statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ ...section, ...teamSection }}>
        <h2 style={sectionTitle}>Meet Our Leadership</h2>
        <div style={sectionTitleUnderline}></div>
        <p style={{ ...introText, marginBottom: '50px' }}>
          The passionate team behind Eventopia's success
        </p>
        
        <div style={teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} style={teamCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div style={teamMemberImage}>
                {member.initials}
              </div>
              <h3 style={teamMemberName}>{member.name}</h3>
              <p style={teamMemberRole}>{member.role}</p>
              <p style={teamMemberBio}>{member.bio}</p>
              <div style={socialLinks}>
                <a href="#" style={socialIcon} onMouseEnter={(e) => e.target.style.color = '#667eea'}>in</a>
                <a href="#" style={socialIcon} onMouseEnter={(e) => e.target.style.color = '#667eea'}>✉️</a>
                <a href="#" style={socialIcon} onMouseEnter={(e) => e.target.style.color = '#667eea'}>🐦</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ ...section, ...ctaSection }}>
        <h2 style={ctaTitle}>Join Our Journey</h2>
        <p style={ctaSubtitle}>
          We're always looking for passionate individuals to join our team. Whether you're an event organizer, 
          developer, or customer service expert, if you share our values, we'd love to hear from you.
        </p>
        <div style={ctaButtons}>
          <button 
            style={primaryButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#5a6fd8';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#667eea';
              e.target.style.transform = 'none';
            }}
          >
            View Open Positions
          </button>
          <button 
            style={secondaryButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(102, 126, 234, 0.1)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.transform = 'none';
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;