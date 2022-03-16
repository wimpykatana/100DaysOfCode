import React, { useEffect, useState } from 'react';

const Card = ({
  card,
  turn,
  setTurn,
  firstCard,
  secondCard,
  setFirstCard,
  setSecondCard,
}) => {
  const cardClickHandle = () => {
    console.log('click');

    if (!firstCard) {
      setFirstCard(card);
      setTurn(turn + 1);
    } else if (!secondCard) {
      setSecondCard(card);
      setTurn(turn + 1);
    }
  };

  const closeCard =
    'https://i.postimg.cc/GtGhsGQ4/monster-portrait-prize.png';

  return (
    <div className='card'>
      <div id={card.id} onClick={cardClickHandle}>
        <img src={closeCard} />
        <img src={card.src} width='100px' height='100px' />
      </div>
    </div>
  );
};

export default Card;
