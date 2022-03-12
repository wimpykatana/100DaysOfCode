import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Game = ({ playerChoice, setScore, score }) => {
  const [playerChoiceIcon, setPlayerChoiceIcon] = useState(null);
  const [computerChoiceIcon, setComputerChoiceIcon] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);

  const playerChoiceFun = () => {
    switch (playerChoice) {
      case 'rock':
        setPlayerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Your Choice
            </span>
            <span>✊🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Rock</span>
          </div>
        );
        break;
      case 'scissors':
        setPlayerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Your Choice
            </span>
            <span>✌🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Scissors</span>
          </div>
        );
        break;
      case 'paper':
        setPlayerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Your Choice
            </span>
            <span>🖐🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Paper</span>
          </div>
        );
    }
  };

  const computerChoiceIconFun = () => {
    switch (computerChoice) {
      case 'rock':
        setComputerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Computer Choice
            </span>
            <span>✊🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Rock</span>
          </div>
        );
        break;
      case 'scissors':
        setComputerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Computer Choice
            </span>
            <span>✌🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Scissors</span>
          </div>
        );
        break;
      case 'paper':
        setComputerChoiceIcon(
          <div className='icon-game'>
            <span style={{ fontSize: '.3em', color: 'white' }}>
              Computer Choice
            </span>
            <span>🖐🏼</span>
            <span style={{ fontSize: '.3em', color: 'white' }}>Paper</span>
          </div>
        );
    }
  };

  const gameResultFun = () => {
    if (playerChoice === 'rock' && computerChoice === 'scissors') {
      setGameResult('win');
      setScore(score + 1);
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
      setGameResult('lose');
      setScore(score - 1);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      setGameResult('win');
      setScore(score + 1);
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
      setGameResult('lose');
      setScore(score - 1);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      setGameResult('win');
      setScore(score + 1);
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
      setGameResult('lose');
      setScore(score - 1);
    } else {
      setGameResult('draw');
    }
  };

  const computerChoiceFun = () => {
    const c = ['rock', 'scissors', 'paper'];
    setComputerChoice(c[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    playerChoiceFun();
  }, [playerChoice]);

  useEffect(() => {
    computerChoiceIconFun();
  }, [computerChoice]);

  useEffect(() => {
    if (playerChoice) {
      computerChoiceFun();
    }
  }, []);

  useEffect(() => {
    if (playerChoiceIcon && computerChoice) {
      gameResultFun();
    }
  }, [playerChoiceIcon, computerChoice]);

  return (
    <>
      <div className='game-holder'>
        {playerChoiceIcon}
        {computerChoiceIcon}
      </div>
      {gameResult === 'win' && <div className='game-result'>You WIN !!!</div>}
      {gameResult === 'lose' && <div className='game-result'>You LOSE !!!</div>}
      {gameResult === 'draw' && <div className='game-result'>It`s Draw</div>}
      <Link to='/' style={{ position: 'absolute', bottom: '0' }}>
        <div
          style={{
            color: 'white',
            marginBottom: '50px',
            fontWeight: '300',
            fontSize: '.9em',
          }}
        >
          PLAY AGAIN
        </div>
      </Link>
    </>
  );
};
