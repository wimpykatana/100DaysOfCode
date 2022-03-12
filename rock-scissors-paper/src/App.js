import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Game } from './Components/Game';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [score, setScore] = useState(0);

  // console.log(playerChoice);

  return (
    <div className='App'>
      <Header score={score} />
      <Routes>
        <Route path='/' element={<Home setPlayerChoice={setPlayerChoice} />} />
        <Route
          path='/Game'
          element={
            <Game
              playerChoice={playerChoice}
              setScore={setScore}
              score={score}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
