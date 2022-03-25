import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdOutlineForward10, MdReplay10 } from 'react-icons/md';

const AudioPlayer = () => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(null);
  const [currTime, setCurrTime] = useState(0);

  //ref
  const audioPlayer = useRef();

  //all function
  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);

    if (!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };

  const whilePlaying = () => {
    changeCurrTime();
    console.log('curentTime:', audioPlayer.current.currentTime);
  };

  const changeCurrTime = () => {
    setCurrTime((prevState) => {
      return prevState + audioPlayer.current.currentTime;
    });
  };

  const backCurr = () => {
    audioPlayer.current.currentTime = currTime - 10;
  };

  const forCurr = () => {
    audioPlayer.current.currentTime = currTime + 10;
  };

  //useEffect
  useEffect(() => {
    let timer = setInterval(() => {
      // console.log('im called');
      // console.log('data is loaded');
      // console.log('curentTime:', audioPlayer.current.currentTime);
      // console.log('duration:', audioPlayer.current.duration);
      // console.log('buffer start:', audioPlayer.current.buffered.start(0));
      // console.log('buffer end:', audioPlayer.current.buffered.end(0));
      // console.log('------------');

      setDuration(parseInt(audioPlayer.current.duration));
      setCurrTime(parseInt(audioPlayer.current.currentTime));
      // setCurrTime((prevState) => {
      //   return prevState + audioPlayer.current.currentTime;
      // });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [audioPlayer?.current?.currentTime]);

  return (
    <>
      <div className='audio-player-holder effect'>
        <audio
          ref={audioPlayer}
          src='http://localhost:3000/music/sample.mp3'
          preload='metada'
        />

        {/* audio control */}
        <div className='audio-control'>
          {isPlaying && (
            <div className='audio-seek-holder'>
              <div
                className='audio-seek-current'
                style={{
                  width: `${
                    currTime && duration ? (currTime / duration) * 100 : 0
                  }%`,
                }}
              ></div>
            </div>
          )}
          <div className='audio-text'>Royalty - Maestro Chives, Egzod</div>

          <div className='audio-controler'>
            <span onClick={backCurr} className='rep'>
              <MdReplay10 />
            </span>

            <span onClick={togglePlayPause}>
              {isPlaying ? <FaPause /> : <FaPlay />}
            </span>

            <span onClick={forCurr} className='for'>
              <MdOutlineForward10 />
            </span>
          </div>
        </div>

        {/* audio thumb */}
        <div className='audio-thumb noRayCast'>
          <img src='/images/audioThumb.png' />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;
