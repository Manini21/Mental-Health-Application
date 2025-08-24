import React, { useState } from 'react';
import MemoryGame from './MemoryGame';

const KidsSection = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-pastel-light rounded-xl shadow-lg">
      <h2 className="text-4xl font-bold text-pastel-pink mb-6">Fun & Focus: Games for Kids</h2>
      <p className="text-lg text-pastel-dark mb-8">
        This section is for games designed to help with focus and memory, particularly for dyslexia and ADHD.
      </p>

      {/* Button to show/hide the game */}
      <div className="text-center mb-6">
        <button
          onClick={() => setShowGame(!showGame)}
          className="bg-pastel-purple text-pastel-light font-bold py-3 px-6 rounded-lg hover:bg-pastel-dark transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-pastel-lavender"
        >
          {showGame ? 'Hide Memory Game' : 'Start a Memory Game'}
        </button>
      </div>

      {/* Placeholder for other games */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 bg-pastel-peach rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-pastel-dark mb-2">Dyslexia-Friendly Reading App</h4>
          <p className="text-pastel-dark">
            A component for reading practice with features like special fonts, text-to-speech, and spaced repetition.
          </p>
        </div>
        <div className="p-6 bg-pastel-peach rounded-lg shadow-sm">
          <h4 className="text-xl font-semibold text-pastel-dark mb-2">Focus & Reaction Game</h4>
          <p className="text-pastel-dark">
            A simple game to improve concentration and reaction time.
          </p>
        </div>
      </div>

      {/* Memory Game Component */}
      {showGame && (
        <div className="bg-pastel-light p-6 rounded-xl border border-dashed border-pastel-lavender">
          <MemoryGame />
        </div>
      )}
    </div>
  );
};

export default KidsSection;
