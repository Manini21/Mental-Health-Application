// src/components/MemoryGame.js

import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';

// --- Card Component (No changes needed here) ---
const Card = ({ card, handleCardClick }) => {
  const { emoji, status } = card;

  const getCardBackground = () => {
    if (status === 'matched') return 'bg-green-400';
    if (status === 'mismatched') return 'bg-red-400';
    return 'bg-white';
  };

  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 [perspective:1000px]" onClick={handleCardClick}>
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          status !== 'default' ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        <div className="absolute w-full h-full rounded-xl bg-pastel-lilac hover:scale-105 transition-transform duration-200 [backface-visibility:hidden]"></div>
        <div
          className={`absolute w-full h-full rounded-xl flex items-center justify-center text-4xl [backface-visibility:hidden] [transform:rotateY(180deg)] ${getCardBackground()}`}
        >
          {emoji}
        </div>
      </div>
    </div>
  );
};


// --- Memory Game Component (Now with Scorecard) ---
const MemoryGame = () => {
  const emojis = ['😊', '😂', '😎', '🤩', '🚀', '🌈', '🎉', '🌟'];

  const generateShuffledCards = () => {
    return shuffle([...emojis, ...emojis]).map((emoji, index) => ({
      id: index,
      emoji,
      status: 'default',
    }));
  };

  const [cards, setCards] = useState(generateShuffledCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isBoardLocked, setIsBoardLocked] = useState(false);
  const [matchesFound, setMatchesFound] = useState(0);
  
  // --- NEW: State for the scorecard ---
  const [score, setScore] = useState(0);
  const [tries, setTries] = useState(0);

  // This hook handles the "endless game" feature.
  useEffect(() => {
    if (matchesFound === emojis.length && emojis.length > 0) {
      const celebrationTimeout = setTimeout(() => {
        resetGame(true); // Pass true to indicate it's a new round, not a manual reset
      }, 3000);

      return () => clearTimeout(celebrationTimeout);
    }
  }, [matchesFound, emojis.length]);


  const handleCardClick = (clickedIndex) => {
    if (isBoardLocked || cards[clickedIndex].status !== 'default') {
      return;
    }

    const newFlippedCards = [...flippedCards, clickedIndex];
    let newCards = [...cards];
    newCards[clickedIndex].status = 'flipped';

    setFlippedCards(newFlippedCards);
    setCards(newCards);

    if (newFlippedCards.length === 2) {
      setIsBoardLocked(true);
      setTries(prev => prev + 1); // An attempt is made
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = newCards[firstIndex];
      const secondCard = newCards[secondIndex];

      if (firstCard.emoji === secondCard.emoji) {
        // --- IT'S A MATCH ---
        firstCard.status = 'matched';
        secondCard.status = 'matched';
        setMatchesFound(prev => prev + 1);
        setScore(prev => prev + 100); // Add points
        setFlippedCards([]);
        setIsBoardLocked(false);
      } else {
        // --- IT'S A MISMATCH ---
        firstCard.status = 'mismatched';
        secondCard.status = 'mismatched';
        setScore(prev => Math.max(0, prev - 10)); // Subtract points (min 0)
        setTimeout(() => {
          firstCard.status = 'default';
          secondCard.status = 'default';
          setCards([...newCards]);
          setFlippedCards([]);
          setIsBoardLocked(false);
        }, 1000);
      }
      setCards([...newCards]);
    }
  };

  const resetGame = (isNewRound = false) => {
    setMatchesFound(0);
    setFlippedCards([]);
    setIsBoardLocked(true);
    
    // --- NEW: Reset score only on a full manual reset, not between rounds ---
    if (!isNewRound) {
        setScore(0);
        setTries(0);
    }
    
    setTimeout(() => {
      setCards(generateShuffledCards());
      setIsBoardLocked(false);
    }, 500);
  };

  return (
    <div className="text-center p-4">
      <h3 className="text-2xl font-bold mb-4 text-pastel-dark">Memory Match Game</h3>
      <p className="mb-4 text-pastel-dark">Find the matching pairs to improve your focus and memory.</p>
      
      {/* --- NEW: Scorecard Display --- */}
      <div className="flex justify-center gap-4 sm:gap-8 mb-6 text-lg sm:text-xl">
        <div className="p-3 px-5 bg-pastel-lilac rounded-lg shadow">
            <span className="font-bold text-pastel-dark">Score: </span>
            <span className="font-mono text-pastel-purple font-semibold">{score}</span>
        </div>
        <div className="p-3 px-5 bg-pastel-lilac rounded-lg shadow">
            <span className="font-bold text-pastel-dark">Tries: </span>
            <span className="font-mono text-pastel-purple font-semibold">{tries}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-6 justify-center items-center max-w-xl mx-auto">
        {cards.map((card, index) => (
          <Card key={card.id} card={card} handleCardClick={() => handleCardClick(index)} />
        ))}
      </div>

      {matchesFound === emojis.length && (
        <div className="mt-6 text-center">
          <p className="text-2xl font-semibold text-green-500 mb-4 animate-pulse">
            You did it! All pairs found!
          </p>
          <p className="text-pastel-dark">Getting ready for the next round...</p>
        </div>
      )}

      {/* --- NEW: Manual Reset Button --- */}
      {matchesFound < emojis.length && (
        <div className="mt-6 text-center">
             <button
                onClick={() => resetGame(false)}
                className="bg-pastel-peach text-pastel-dark font-bold py-2 px-6 rounded-lg hover:bg-pastel-dark hover:text-white transition-colors"
            >
                Reset Game
            </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;