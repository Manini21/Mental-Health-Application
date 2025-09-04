import React from 'react';
import { Gamepad2 } from 'lucide-react';
import MemoryGame from './MemoryGame';

const KidsSection = () => {
  return (
    
    <div className="text-center bg-pastel-light dark:bg-pastel-dark text-pastel-dark dark:text-pastel-light min-h-screen">
      <div className="flex-grow pt-300 p-6 max-w-5xl width-full mx-auto">
        <div style={{ height: '500px' }}></div> {/* Test content for scrolling */}
        <Gamepad2 className="h-24 w-24 mx-auto text-pastel-pink dark:text-pastel-lavender mb-6" />
        <h2 className="text-4xl font-extrabold text-pastel-dark dark:text-pastel-light mb-4">Kids Section</h2>
        <p className="text-xl text-pastel-dark dark:text-pastel-light mb-8">
          Welcome to the playground! Here are some fun and engaging games designed to help you focus and learn.
        </p>
        <MemoryGame />
      </div>
    </div>
  );
};

export default KidsSection;