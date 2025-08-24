import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { Smile, Gamepad2, Home, LogOut, HeartPulse } from 'lucide-react';
import HomePage from './components/HomePage';
import AdultsSection from './components/AdultsSection';
import KidsSection from './components/KidsSection';
import NavButton from './components/NavButton';
import AuthPage from './components/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';

// Main App Component with Router
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for a token in local storage on initial load
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-pastel-light font-sans antialiased">
        {/* Header with Navigation */}
        <header className="bg-pastel-lilac shadow-md p-4 sticky top-0 z-50">
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-pastel-dark flex items-center">
              <HeartPulse className="h-8 w-8 text-pastel-purple mr-2" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-purple to-pastel-blue">
                Mind Oasis
              </span>
            </h1>
            <div className="flex space-x-4">
              <Link to="/"><NavButton icon={<Home className="h-6 w-6" />} label="Home" /></Link>
              <Link to="/adults"><NavButton icon={<Smile className="h-6 w-6" />} label="Adults" /></Link>
              <Link to="/kids"><NavButton icon={<Gamepad2 className="h-6 w-6" />} label="Kids" /></Link>
              {isAuthenticated ? (
                <NavButton icon={<LogOut className="h-6 w-6" />} label="Logout" onClick={handleLogout} />
              ) : (
                <Link to="/auth"><NavButton icon={<HeartPulse className="h-6 w-6" />} label="Login" /></Link>
              )}
            </div>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-6">
          <Routes>
            {/* These pages are public and can be accessed without login */}
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />

            {/* These pages are protected and require login */}
            <Route
              path="/adults"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <AdultsSection />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kids"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <KidsSection />
                </ProtectedRoute>
              }
            />

            {/* Default redirect to home page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-pastel-dark text-pastel-light p-4 text-center text-sm">
          <p>
            &copy; 2024 Mind Oasis. All rights reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
