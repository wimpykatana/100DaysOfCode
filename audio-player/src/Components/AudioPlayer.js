import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { MdOutlineForward10, MdReplay10 } from 'react-icons/md';

const AudioPlayer = () => {
  return (
    <div className='audio-player-holder effect'>
      <div className='audio-thumb'>
        <img src='/images/audioThumb.png' />
      </div>

      <div className='audio-control'>
        <div className='audio-seek-holder'>
          <div className='audio-seek-current' style={{ width: '28%' }}></div>
        </div>
        <div className='audio-text'>Blink 182 - I miss You</div>

        <div className='audio-controler'>
          <span className='rep'>
            <MdReplay10 />
          </span>

          <span>
            <FaPlay />
          </span>

          <span className='for'>
            <MdOutlineForward10 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
