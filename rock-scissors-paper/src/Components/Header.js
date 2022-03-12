import React from 'react';

const Header = ({ score }) => {
  return (
    <div
      style={{
        marginBottom: '20px',
        width: '100%',
        position: 'absolute',
        top: '0',
      }}
    >
      <div
        style={{
          paddingTop: '10px',
          paddingBottom: '10px',
          borderBottom: '1px solid #ccc',
          marginBottom: '10px',
          fontSize: '48px',
        }}
      >
        Rock Scissors Paper
      </div>
      <div
        style={{
          backgroundColor: 'white',
          color: '#282c34',
          padding: '20px',
          borderRadius: '15px',
          margin: '0 auto',
          width: 'auto',
          maxWidth: '15vw',
        }}
      >
        {score}
      </div>
    </div>
  );
};

export default Header;
