import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';

const MemoryGame = () => {
  const emojis = ['😊', '😂', '😎', '🤩', '🚀', '🌈', '🎉', '🌟'];
  const initialCards = shuffle([...emojis, ...emojis]).map((emoji, index) => ({
    id: index,
    emoji,
    isFlipped: false,
    isMatched: false
  }));

  const [cards, setCards] = useState(initialCards);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isChecking, setIsChecking] = useState(false);
  const [matchesFound, setMatchesFound] = useState(0);

  useEffect(() => {
    // Check for a match after a second card is flipped
    if (flippedCards.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = flippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      if (firstCard.emoji === secondCard.emoji) {
        // Match found!
        setCards(prevCards =>
          prevCards.map(card =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true }
              : card
          )
        );
        setMatchesFound(prev => prev + 1);
        setFlippedCards([]);
        setIsChecking(false);
      } else {
        // No match, flip them back after a short delay
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCard.id || card.id === secondCard.id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  const handleCardClick = (index) => {
    if (isChecking || flippedCards.includes(index) || cards[index].isMatched) {
      return;
    }

    setCards(prevCards =>
      prevCards.map((card, i) =>
        i === index ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards(prev => [...prev, index]);
  };

  const resetGame = () => {
    setCards(shuffle([...emojis, ...emojis]).map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    })));
    setFlippedCards([]);
    setIsChecking(false);
    setMatchesFound(0);
  };

  return (
    <div className="text-center p-4">
      <h3 className="text-2xl font-bold mb-4 text-pastel-dark">Memory Match Game</h3>
      <p className="mb-4 text-pastel-dark">Find the matching pairs to improve your focus and memory.</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 justify-center items-center max-w-lg mx-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            className={`
              w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
              flex items-center justify-center rounded-xl cursor-pointer
              transition-transform duration-300 transform-gpu
              ${card.isFlipped ? 'rotate-y-180' : ''}
              ${card.isMatched ? 'bg-pastel-mint pointer-events-none' : 'bg-pastel-lilac hover:scale-105'}
            `}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div
              className={`
                absolute w-full h-full backface-hidden rounded-xl
                flex items-center justify-center text-4xl
                transition-transform duration-300
              `}
              style={{
                transform: `rotateY(${card.isFlipped ? '0deg' : '180deg'})`,
              }}
            >
              {card.emoji}
            </div>
          </div>
        ))}
      </div>
      {matchesFound === emojis.length && (
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-pastel-mint mb-4">You did it! All pairs found!</p>
          <button
            onClick={resetGame}
            className="bg-pastel-mint text-white font-bold py-2 px-6 rounded-lg hover:bg-pastel-dark transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
