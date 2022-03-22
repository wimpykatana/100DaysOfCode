import { useEffect, useState } from 'react';
import './app.css';
const App = () => {
  const [red, setRed] = useState(null);
  const [green, setGreen] = useState(null);
  const [blue, setBlue] = useState(null);

  const changeCollor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    setRed(r);
    setGreen(g);
    setBlue(b);

    console.log(`${r} ${g} ${b}`);
  };

  useEffect(() => {
    changeCollor();
  }, []);

  return (
    <div
      style={{ backgroundColor: `rgb(${red},${green},${blue})` }}
      className='app-holder'
    >
      <div className='bgcolor-text'>
        {' '}
        Background Color
        <br /> rgb({red},{green},{blue})
      </div>
      <div onClick={changeCollor} className='change-color'>
        {' '}
        Change Color
      </div>
    </div>
  );
};

export default App;
