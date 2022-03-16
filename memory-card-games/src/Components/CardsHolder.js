import React, { useEffect, useState } from 'react';
import EachCard from './Card';

const rawCard = [
  {
    id: 1,
    src: 'https://i.postimg.cc/5X2r42Qp/monster-portrait-air.png',
    matched: false,
  },
  {
    id: 2,
    src: 'https://i.postimg.cc/gxtTnbvp/monster-portrait-celestial.png',
    matched: false,
  },
  {
    id: 3,
    src: 'https://i.postimg.cc/WDDfZYnk/monster-portrait-cold.png',
    matched: false,
  },
  {
    id: 4,
    src: 'https://i.postimg.cc/v1p2t7qS/monster-portrait-crystal.png',
    matched: false,
  },
  {
    id: 5,
    src: 'https://i.postimg.cc/dkrHH7gQ/monster-portrait-earth.png',
    matched: false,
  },
  {
    id: 6,
    src: 'https://i.postimg.cc/V0w73fcq/monster-portrait-electricity.png',
    matched: false,
  },
  {
    id: 7,
    src: 'https://i.postimg.cc/nMtpHqFk/monster-portrait-fire.png',
    matched: false,
  },
  {
    id: 8,
    src: 'https://i.postimg.cc/Wq79VB2Q/monster-portrait-gold.png',
    matched: false,
  },
];

const CardsHolder = () => {
  const [cards, setCards] = useState(null);
  const [turn, setTurn] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const shuffleCard = () => {
    const shuffledCard = [...rawCard, ...rawCard].sort(
      () => Math.random() - 0.3
    );
    setCards(shuffledCard);
  };

  const checkResult = () => {
    if (firstCard && secondCard) {
      console.log('check result');
      if (firstCard.id === secondCard.id) {
        console.log('is match');
        resetCard();
      } else {
        console.log('not match');
        resetCard();
      }
    }
  };

  const resetCard = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  useEffect(() => {
    checkResult();
  }, [firstCard, secondCard]);

  useEffect(() => {
    shuffleCard();
  }, []);

  console.log(`first card: ${firstCard ? firstCard.id : null}`);
  console.log(`second card: ${secondCard ? secondCard.id : null}`);
  return (
    <>
      <div className='card-holder'>
        {cards &&
          cards.map((card, i) => {
            return (
              <EachCard
                card={card}
                key={i}
                turn={turn}
                setTurn={setTurn}
                firstCard={firstCard}
                setFirstCard={setFirstCard}
                secondCard={secondCard}
                setSecondCard={setSecondCard}
              />
            );
          })}
      </div>
      <div style={{ marginTop: '50px' }}>Turn: {turn}</div>
    </>
  );
};

export default CardsHolder;
