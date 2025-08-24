import React, { useState } from 'react';
import { Smile, Gamepad2, Home, HeartPulse } from 'lucide-react';
import HomePage from './components/HomePage';
import AdultsSection from './components/AdultsSection';
import KidsSection from './components/KidsSection';
import NavButton from './components/NavButton';

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Renders the main content based on the current page state.
  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'adults':
        return <AdultsSection />;
      case 'kids':
        return <KidsSection />;
      default:
        return <HomePage />;
    }
  };

  return (
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
            <NavButton icon={<Home className="h-6 w-6" />} label="Home" onClick={() => setCurrentPage('home')} />
            <NavButton icon={<Smile className="h-6 w-6" />} label="Adults" onClick={() => setCurrentPage('adults')} />
            <NavButton icon={<Gamepad2 className="h-6 w-6" />} label="Kids" onClick={() => setCurrentPage('kids')} />
          </div>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow p-6">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-pastel-dark text-pastel-light p-4 text-center text-sm">
        <p>
          &copy; 2024 Mind Oasis. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
