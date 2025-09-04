import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { Smile, Gamepad2, HeartPulse, Home, LogOut } from 'lucide-react';
import HomePage from './components/HomePage';
import AdultsSection from './components/AdultsSection';
import KidsSection from './components/KidsSection';
import NavButton from './components/NavButton';
import AuthPage from './components/AuthPage';
import ProtectedRoute from './components/ProtectedRoute';
import Chatbot from './components/Chatbot';
import FloatingChatButton from './components/FloatingChatButton';
import { ThemeContext, ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';


const App = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-pastel-light dark:bg-pastel-dark font-sans antialiased">
      {/* Header with Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-pastel-lavender dark:bg-pastel-purple shadow-md p-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-pastel-dark dark:text-pastel-light flex items-center">
            <HeartPulse className="h-8 w-8 text-pastel-purple dark:text-pastel-light mr-2" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pastel-purple dark:from-pastel-mint to-pastel-blue dark:to-pastel-light">
              Mind Oasis
            </span>
          </h1>
          <div className="flex space-x-4">
            <Link to="/"><div className="flex items-center text-pastel-dark dark:text-pastel-light hover:text-pastel-mint"><Home className="h-6 w-6 mr-1" />Home</div></Link>
            {isAuthenticated && (
              <>
                <Link to="/adults"><div className="flex items-center text-pastel-dark dark:text-pastel-light hover:text-pastel-mint"><Smile className="h-6 w-6 mr-1" />Adults</div></Link>
                <Link to="/kids"><div className="flex items-center text-pastel-dark dark:text-pastel-light hover:text-pastel-mint"><Gamepad2 className="h-6 w-6 mr-1" />Kids</div></Link>
              </>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-pastel-peach text-pastel-dark font-bold py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transition-colors dark:bg-pastel-lilac dark:text-white dark:hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link to="/auth" className="bg-pastel-peach text-pastel-dark font-bold py-2 px-4 rounded-lg hover:bg-pastel-dark hover:text-white transition-colors dark:bg-pastel-lilac dark:text-white dark:hover:bg-pastel-mint">
                Login
              </Link>
            )}
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-300 p-6">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage setIsAuthenticated={setIsAuthenticated} />} />
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating button that toggles the chatbot */}
      {!isChatbotOpen && isAuthenticated && <FloatingChatButton onClick={() => setIsChatbotOpen(true)} />}

      {/* Conditionally render the Chatbot */}
      {isChatbotOpen && isAuthenticated && (
        <div className="fixed bottom-4 right-4 z-50">
          <Chatbot onClose={() => setIsChatbotOpen(false)} />
        </div>
      )}
      <footer className="bg-pastel-dark text-pastel-light p-4 text-center text-sm">
        <p>
          &copy; 2024 Mind Oasis. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

const AppWrapper = () => (
  <Router basename="/Mental-Health-Application">
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Router>
);

export default AppWrapper;
