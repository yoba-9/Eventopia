import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const styles = {
    container: {
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      backgroundColor: '#f8f9fa',
    },
    loginCard: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '3rem',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      width: '100%',
      maxWidth: '400px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1a1a2e',
      marginBottom: '0.5rem',
      textAlign: 'center',
    },
    subtitle: {
      color: '#4a5568',
      fontSize: '1rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      color: '#1a1a2e',
      fontWeight: '500',
      fontSize: '0.95rem',
    },
    input: {
      width: '100%',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      fontSize: '1rem',
      transition: 'border-color 0.2s ease',
    },
    btnLogin: {
      width: '100%',
      backgroundColor: '#000000',
      color: '#ffffff',
      border: 'none',
      padding: '1rem',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: '1.5rem',
    },
    footerText: {
      textAlign: 'center',
      color: '#4a5568',
      fontSize: '0.95rem',
    },
    link: {
      color: '#4361ee',
      fontWeight: '600',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Log in to your Eventopia account</p>
        
        <form>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input 
              type="email" 
              placeholder="someone@gmail.com"
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = '#4361ee'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
          
          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              style={styles.input}
              onFocus={(e) => e.target.style.borderColor = '#4361ee'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
          
          <button 
            type="submit"
            style={styles.btnLogin}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#333333';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = styles.btnLogin.backgroundColor;
              e.target.style.transform = 'none';
            }}
          >
            Log In
          </button>
        </form>
        
        <p style={styles.footerText}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.link}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;