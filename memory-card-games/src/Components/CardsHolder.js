import React, { useEffect, useState } from 'react';
import EachCard from './Card';

const rawCard = [
  {
    id: 1,
    src: 'https://i.postimg.cc/5X2r42Qp/monster-portrait-air.png',
    matched: false,
    isClick: false,
  },
  {
    id: 2,
    src: 'https://i.postimg.cc/gxtTnbvp/monster-portrait-celestial.png',
    matched: false,
    isClick: false,
  },
  {
    id: 3,
    src: 'https://i.postimg.cc/WDDfZYnk/monster-portrait-cold.png',
    matched: false,
    isClick: false,
  },
  {
    id: 4,
    src: 'https://i.postimg.cc/v1p2t7qS/monster-portrait-crystal.png',
    matched: false,
    isClick: false,
  },
  {
    id: 5,
    src: 'https://i.postimg.cc/dkrHH7gQ/monster-portrait-earth.png',
    matched: false,
    isClick: false,
  },
  {
    id: 6,
    src: 'https://i.postimg.cc/V0w73fcq/monster-portrait-electricity.png',
    matched: false,
    isClick: false,
  },
  {
    id: 7,
    src: 'https://i.postimg.cc/nMtpHqFk/monster-portrait-fire.png',
    matched: false,
    isClick: false,
  },
  {
    id: 8,
    src: 'https://i.postimg.cc/Wq79VB2Q/monster-portrait-gold.png',
    matched: false,
    isClick: false,
  },
];

const CardsHolder = () => {
  const [cards, setCards] = useState(null);
  const [turn, setTurn] = useState(0);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [isCardMatch, setIsCardMatch] = useState('');

  const shuffleCard = () => {
    const shuffledCard = [...rawCard, ...rawCard].sort(
      () => Math.random() - 0.3
    );
    setCards(shuffledCard);
  };

  const checkResult = () => {
    if (firstCard && secondCard) {
      if (firstCard.id === secondCard.id) {
        setIsCardMatch('It`s a match !!!');

        setTimeout(() => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === firstCard.id && card.id === secondCard.id) {
                return { ...card, matched: true };
              } else {
                return card;
              }
            });
          });
        }, 2500);

        resetCard();
      } else {
        setIsCardMatch('It`s not a match, Try Again');
        resetCard();
      }
    }
  };

  const resetCard = () => {
    setTimeout(() => {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          return { ...card, isClick: false };
        });
      });
      setFirstCard(null);
      setSecondCard(null);
      setIsCardMatch('');
    }, 2500);
  };

  const cardClickHandle = (val) => {
    // console.log(typeof val);
    if (!firstCard) {
      setCards((prevCards) => {
        return prevCards.map((card, i) => {
          if (i === val) {
            return { ...card, isClick: true };
          } else {
            return card;
          }
        });
      });
      setFirstCard(cards[val]);
      setTurn(turn + 1);
    } else if (!secondCard) {
      setCards((prevCards) => {
        return prevCards.map((card, i) => {
          if (i === val) {
            return { ...card, isClick: true };
          } else {
            return card;
          }
        });
      });
      setSecondCard(cards[val]);
      setTurn(turn + 1);
    }
  };

  useEffect(() => {
    checkResult();
  }, [firstCard, secondCard]);

  useEffect(() => {
    shuffleCard();
  }, []);
  return (
    <>
      <div className='card-holder'>
        {cards &&
          cards.map((card, i) => {
            return (
              <EachCard
                card={card}
                key={i}
                indexCard={i}
                cardClickHandle={cardClickHandle}
              />
            );
          })}
      </div>
      <div>{isCardMatch}</div>
      <div
        style={{
          margin: '50px 0',
          position: 'absolute',
          bottom: '0',
          fontSize: '35px',
          width: '100%',
        }}
      >
        Turn: {turn}
      </div>
    </>
  );
};

export default CardsHolder;
