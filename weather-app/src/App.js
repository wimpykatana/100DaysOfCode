import React, { useEffect, useState } from 'react';
const api = {
  key: 'e3b82c1d121701df51755f64255af66c',
  base: 'http://api.weatherstack.com/current?access_key=e3b82c1d121701df51755f64255af66c&query=',
  //sample: http://api.weatherstack.com/current?access_key=e3b82c1d121701df51755f64255af66c&query=jakarta
};

const App = () => {
  const [city, setCity] = useState('jakarta');
  const [weather, setWeather] = useState(null);

  const search = () => {
    fetch(`${api.base}${city}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
      });
  };

  useEffect(() => {
    search();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div
      className={`content-holder ${
        weather ? (weather.current.is_day === 'yes' ? 'day' : 'night') : ''
      }`}
    >
      <main>
        <div className='search-holder'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              className='search-input'
              value={city}
              placeholder='Jakarta'
              onChange={(e) => setCity(e.target.value)}
            />
            <input className='search-icon' type='submit' value='⌕' />
          </form>
        </div>

        <div className='content-text-holder'>
          <div className='city'>{weather ? weather.request.query : ''}</div>
          <div className='date'>
            {weather ? weather.location.localtime : ''}
          </div>
          <div className='weather'>
            {weather ? weather.current.weather_descriptions : ''}
          </div>
          <div className='temp'>
            {weather ? weather.current.temperature + '°c' : ''}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
