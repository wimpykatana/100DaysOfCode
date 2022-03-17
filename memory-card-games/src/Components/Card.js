import React, { useEffect, useState } from 'react';

const Card = ({ card, cardClickHandle, indexCard }) => {
  const childCardClick = () => {
    if (!card.isClick) {
      cardClickHandle(indexCard);
    }
  };

  const closeCard = 'https://i.postimg.cc/GtGhsGQ4/monster-portrait-prize.png';

  return (
    <div className='card' onClick={childCardClick} disabled={card.isClick}>
      {!card.matched && (
        <div data-id={card.id} className='noRayCast'>
          {!card.isClick && <img className='noRayCast' src={closeCard} />}
          {card.isClick && (
            <img
              className='noRayCast'
              src={card.src}
              width='100px'
              height='100px'
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
