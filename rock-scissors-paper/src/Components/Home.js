import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setPlayerChoice }) => {
  const handleChoice = (e) => {
    setPlayerChoice(e.target.dataset.id);
  };
  return (
    <div className='icon-holder'>
      <Link to='/game'>
        <div className='icon' data-id='rock' onClick={handleChoice}>
          <span className='noRayCast'>✊🏼</span>
          <span
            className='noRayCast'
            style={{ fontSize: '.3em', color: 'white' }}
          >
            Rock
          </span>
        </div>
      </Link>

      <Link to='/game'>
        <div className='icon' data-id='scissors' onClick={handleChoice}>
          <span className='noRayCast'>✌🏼</span>
          <span
            className='noRayCast'
            style={{ fontSize: '.3em', color: 'white' }}
          >
            Scissors
          </span>
        </div>
      </Link>

      <Link to='/game'>
        <div className='icon' data-id='paper' onClick={handleChoice}>
          <span className='noRayCast'>🖐🏼</span>
          <span
            className='noRayCast'
            style={{ fontSize: '.3em', color: 'white' }}
          >
            {' '}
            Paper
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Home;
