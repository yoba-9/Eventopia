// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Discover from './pages/Discover';
import CreateEvent from './pages/CreateEvent';
import Pricing from './pages/Pricing';
import Footer from './components/Footer';
import About from './pages/About';
import Profile from './pages/Profile';

const App = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  // Function to handle login (can be passed to Login component)
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  // Function to handle logout (can be passed to Profile component)
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  const styles = {
    app: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      lineHeight: 1.6,
      color: '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    main: {
      flex: 1,
      width: '100%',
    },
  };

  return (
    <Router>
      <div style={styles.app}>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main style={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                <Login onLogin={handleLogin} />
              } 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/discover" element={<Discover />} />
            <Route 
              path="/create-event" 
              element={
                isAuthenticated ? <CreateEvent /> : <Navigate to="/login" replace />
              } 
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/profile" 
              element={
                isAuthenticated ? <Profile onLogout={handleLogout} /> : <Navigate to="/login" replace />
              } 
            />
            {/* Add a catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;