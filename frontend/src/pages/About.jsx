// pages/About.jsx
import React from 'react';
import Eyob from '../assets/Eyob.jpg';
import Frehiwot from '../assets/Frehiwot.jpg';
import Elsabeth from '../assets/Elsabeth.jpg';
import Team from '../assets/Team.jpg';

const About = () => {
  // Main container styles
  const pageContainer = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  };

  // Hero Section matching image
  const heroSection = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: '120px 0 100px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const heroContent = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
    position: 'relative',
    zIndex: 2,
  };

  const heroTitle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '20px',
    lineHeight: '1.2',
  };

  const heroSubtitle = {
    fontSize: '1.1rem',
    opacity: 0.9,
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  // Content Section Styles - Updated for centered headings
  const contentSection = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
  };

  const sectionTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#2d3748',
    marginBottom: '20px',
    textAlign: 'center', // Center all section titles
  };

  const sectionSubtitle = {
    fontSize: '1.1rem',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '30px',
    textAlign: 'center', // Center all section subtitles
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  // Two Column Layout
  const twoColumn = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '60px',
    alignItems: 'center',
    marginBottom: '60px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  };

  const columnContent = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.8',
  };

  const highlightText = {
    backgroundColor: '#e6f7ff',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #1890ff',
    margin: '20px 0',
  };

  const missionVisionGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginTop: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  };

  const missionCard = {
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '8px',
    borderTop: '4px solid #667eea',
    textAlign: 'center',
  };

  const visionCard = {
    backgroundColor: '#f8f9fa',
    padding: '30px',
    borderRadius: '8px',
    borderTop: '4px solid #764ba2',
    textAlign: 'center',
  };

  const cardTitle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#2d3748',
  };

  const cardContent = {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.6',
  };

  // Values Section
  const valuesGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '30px',
    marginTop: '40px',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    }
  };

  const valueItem = {
    textAlign: 'center',
    padding: '20px',
  };

  const valueIcon = {
    fontSize: '2.5rem',
    marginBottom: '15px',
    color: '#667eea',
  };

  const valueTitle = {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#2d3748',
  };

  const valueDescription = {
    fontSize: '0.95rem',
    color: '#4a5568',
    lineHeight: '1.5',
  };

  // Journey Timeline
  const journeySection = {
    backgroundColor: '#f8f9fa',
    padding: '80px 20px',
  };

  const journeyContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const journeyContent = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '40px',
  };

  // Stats Section
  const statsSection = {
    padding: '80px 20px',
    backgroundColor: '#667eea',
    color: 'white',
  };

  const statsContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const statsTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '60px',
  };

  const statsGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
    }
  };

  const statItem = {
    textAlign: 'center',
  };

  const statNumber = {
    fontSize: '3rem',
    fontWeight: '800',
    marginBottom: '10px',
  };

  const statLabel = {
    fontSize: '1.1rem',
    opacity: 0.9,
  };

  // Team Section
  const teamSection = {
    padding: '80px 20px',
    backgroundColor: 'white',
  };

  const teamContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const teamTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#2d3748',
  };

  const teamSubtitle = {
    fontSize: '1.1rem',
    color: '#4a5568',
    textAlign: 'center',
    marginBottom: '50px',
  };

  const teamGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    '@media (max-width: 992px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    }
  };

  const teamMember = {
    textAlign: 'center',
  };

  const memberImage = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    margin: '0 auto 20px',
    overflow: 'hidden',
    border: '5px solid #f0f2f5',
  };

  const memberName = {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '5px',
    color: '#2d3748',
  };

  const memberRole = {
    fontSize: '1rem',
    color: '#667eea',
    marginBottom: '15px',
    fontWeight: '500',
  };

  const memberBio = {
    fontSize: '0.95rem',
    color: '#4a5568',
    lineHeight: '1.5',
    marginBottom: '15px',
  };

  const socialLinks = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '15px',
  };

  const socialIcon = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#718096',
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
  };

  // Join Journey Section
  const joinSection = {
    padding: '80px 20px',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  };

  const joinContainer = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const joinTitle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#2d3748',
  };

  const joinText = {
    fontSize: '1.1rem',
    color: '#4a5568',
    lineHeight: '1.6',
    marginBottom: '30px',
  };

  const buttonGroup = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    '@media (max-width: 480px)': {
      flexDirection: 'column',
      alignItems: 'center',
    }
  };

  const primaryButton = {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const secondaryButton = {
    backgroundColor: 'white',
    color: '#667eea',
    border: '2px solid #667eea',
    padding: '12px 30px',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  // Image styles
  const teamImageStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  };

  return (
    <div style={pageContainer}>
      {/* Hero Section */}
      <section style={heroSection}>
        <div style={heroContent}>
          <h1 style={heroTitle}>Our Story</h1>
          <p style={heroSubtitle}>
            Connecting people through what is possible. Currently, people through what is possible to understand in 2021.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={contentSection}>
        <h2 style={sectionTitle}>Who We Are</h2>
        <p style={sectionSubtitle}>
          <strong>Eventopia</strong> was founded in 2022 with a mission to make event discovery and organization 
          accessible for everyone. What started as a small platform for local events has grown into Ethiopia's 
          leading event ecosystem. Our platform combines cutting-edge technology with exceptional customer 
          service to ensure every event launched through our platform succeeds and creates meaningful experiences.
        </p>
        
        <div style={twoColumn}>
          <div style={columnContent}>
            <p>
              We believe in the power of shared experiences to bring people together, build communities, 
              and create lasting memories. Every event on our platform is an opportunity to connect, 
              celebrate, and grow together.
            </p>
            
            <div style={highlightText}>
              <strong>Our Vision:</strong> To harness our work toward global platforms to ensure equitable 
              strategy, shared experiences, fostering community and cultural development.
            </div>
          </div>
          
          <div>
            {/* Team image placeholder - You can add your own team image here */}
            <div style={{
              width: '100%',
              height: '400px',
              backgroundColor: '#e2e8f0',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#718096',
              fontSize: '1rem',
            }}>
              <img src={Team} alt="Team" style={teamImageStyle} /> 
            </div>
          </div>
        </div>

        <div style={missionVisionGrid}>
          <div style={missionCard}>
            <h3 style={cardTitle}>Our Mission</h3>
            <p style={cardContent}>
              To democratize event access by providing tools that simplify event discovery, 
              creation, and management for everyone, from individuals to large organizations.
            </p>
          </div>
          
          <div style={visionCard}>
            <h3 style={cardTitle}>Our Vision</h3>
            <p style={cardContent}>
              To become the world's leading platform for creating meaningful, shared experiences, 
              fostering community growth and cultural development across Ethiopia and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section style={{...contentSection, backgroundColor: '#f8f9fa'}}>
        <h2 style={sectionTitle}>Our Values</h2>
        <p style={sectionSubtitle}>
          Community, Innovation, Accessibility, and Joy are transforming our values by new members 
          created through events on our platform.
        </p>
        
        <div style={valuesGrid}>
          <div style={valueItem}>
            <div style={valueIcon}>🤝</div>
            <h3 style={valueTitle}>Community</h3>
            <p style={valueDescription}>
              Building connections and fostering relationships through shared experiences.
            </p>
          </div>
          
          <div style={valueItem}>
            <div style={valueIcon}>💡</div>
            <h3 style={valueTitle}>Innovation</h3>
            <p style={valueDescription}>
              Continuously improving our platform to deliver cutting-edge event solutions.
            </p>
          </div>
          
          <div style={valueItem}>
            <div style={valueIcon}>🌐</div>
            <h3 style={valueTitle}>Accessibility</h3>
            <p style={valueDescription}>
              Making event discovery and management available to everyone, everywhere.
            </p>
          </div>
          
          <div style={valueItem}>
            <div style={valueIcon}>✨</div>
            <h3 style={valueTitle}>Joy</h3>
            <p style={valueDescription}>
              Creating memorable experiences that bring happiness to organizers and attendees.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section style={journeySection}>
        <div style={journeyContainer}>
          <h2 style={sectionTitle}>Our Journey</h2>
          <p style={sectionSubtitle}>
            From our humble beginnings in Addis Ababa, we've grown to serve over 40,000 organizers 
            and millions of attendees across Ethiopia. Our platform has facilitated everything from 
            small community gatherings to large-scale festivals.
          </p>
          
          <div style={journeyContent}>
            <p style={{marginBottom: '20px', textAlign: 'center'}}>
              <strong>2016:</strong> We launched our platform, empowering anyone to easily organize their events. 
              Our focus was on how to become the go-to platform for most places in the region.
            </p>
            <p style={{marginBottom: '20px', textAlign: 'center'}}>
              <strong>2022:</strong> We expanded our features to include what event organizers and attendees 
              really needed. We registered significant growth and expanded to new cities.
            </p>
            <p style={{textAlign: 'center'}}>
              As always, it has been challenging and rewarding to include what event organizers and 
              attendees need. We remain committed to our mission.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={statsSection}>
        <div style={statsContainer}>
          <h2 style={statsTitle}>Our Impact</h2>
          <div style={statsGrid}>
            <div style={statItem}>
              <div style={statNumber}>50K+</div>
              <div style={statLabel}>Events Hosted</div>
            </div>
            <div style={statItem}>
              <div style={statNumber}>1M+</div>
              <div style={statLabel}>Active Users</div>
            </div>
            <div style={statItem}>
              <div style={statNumber}>120+</div>
              <div style={statLabel}>Cities Covered</div>
            </div>
            <div style={statItem}>
              <div style={statNumber}>98%</div>
              <div style={statLabel}>Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section style={teamSection}>
        <div style={teamContainer}>
          <h2 style={teamTitle}>Meet Our Leadership</h2>
          <p style={teamSubtitle}>The passionate team behind Eventopia's success</p>
          
          <div style={teamGrid}>
            {/* CEO */}
            <div style={teamMember}>
              <div style={memberImage}>
                <img 
                  src={Eyob} 
                  alt="Eyob Melaku" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </div>
              <h3 style={memberName}>Eyob Mebratu</h3>
              <p style={memberRole}>CEO & Founder</p>
              <p style={memberBio}>
                Former tech leader with 10+ years in event technology, passionate about creating 
                seamless event experiences as an event organizer.
              </p>
              <div style={socialLinks}>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  in
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="Email"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#34a853';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  ✉️
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="X"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  𝕏
                </a>
              </div>
            </div>
            
            {/* CTO */}
            <div style={teamMember}>
              <div style={memberImage}>
                <img 
                  src={Frehiwot} 
                  alt="Firehiwot Lemma" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </div>
              <h3 style={memberName}>Firehiwot Lemma</h3>
              <p style={memberRole}>CTO</p>
              <p style={memberBio}>
                Tech visionary with background in engineering and computer science, overseeing 
                our technical architecture and ensuring scalable, secure platform.
              </p>
              <div style={socialLinks}>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  in
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="Email"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#34a853';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  ✉️
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="X"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  𝕏
                </a>
              </div>
            </div>
            
            {/* COO */}
            <div style={teamMember}>
              <div style={memberImage}>
                <img 
                  src={Elsabeth} 
                  alt="Elsabeth Wondimu" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }} 
                />
              </div>
              <h3 style={memberName}>Elsabeth Wondimu</h3>
              <p style={memberRole}>COO</p>
              <p style={memberBio}>
                Operations expert with focus on customer satisfaction and process optimization, 
                committed to delivering exceptional event experiences.
              </p>
              <div style={socialLinks}>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="LinkedIn"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#0077b5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  in
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="Email"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#34a853';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  ✉️
                </a>
                <a 
                  href="#" 
                  style={socialIcon} 
                  aria-label="X"
                  onMouseEnter={(e) => {
                    e.target.style.color = '#ffffff';
                    e.target.style.backgroundColor = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = '#718096';
                    e.target.style.backgroundColor = '#f0f2f5';
                  }}
                >
                  𝕏
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section style={joinSection}>
        <div style={joinContainer}>
          <h2 style={joinTitle}>Join Our Journey</h2>
          <p style={joinText}>
            We're always looking for passionate individuals to join our team. Whether you're an event 
            organizer, developer, or customer service expert, if you share our values, we'd love to 
            hear from you.
          </p>
          <p style={joinText}>
            For event organizers, we offer comprehensive tools and support to help you create 
            successful events. For attendees, we're constantly working to bring you the best 
            events and experiences.
          </p>
          <div style={buttonGroup}>
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
                e.target.style.backgroundColor = '#f0f2f5';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.transform = 'none';
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;