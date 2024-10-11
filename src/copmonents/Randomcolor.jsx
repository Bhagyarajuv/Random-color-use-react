import React, { useState, useEffect } from 'react';

const RandomColor = () => {
  const [typeOf, setTypeOf] = useState('hex');
  const [color, setColor] = useState('#000000');

  const RandomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRandomColor = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[RandomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRGBColor = () => {
    const r = RandomColorUtility(256);
    const g = RandomColorUtility(256);
    const b = RandomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);  // Missing closing parenthesis added here
  };

  useEffect(() => {
    if (typeOf === 'rgb') {
      handleCreateRandomRGBColor();
    } else {
      handleCreateRandomColor();
    }
  }, [typeOf]); // Dependency array correctly using typeOf

  return (
    <div
      style={{
        width: '100vh',
        height: '100vh',
        background: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      }}
    >
      <button onClick={() => setTypeOf('hex')}>Create HEX Color</button>
      <button onClick={() => setTypeOf('rgb')}>Create RGB Color</button>
      <button
        onClick={typeOf === 'hex' ? handleCreateRandomColor : handleCreateRandomRGBColor}
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'column',
          gap: '20px',
          marginTop: '50px',
        }}
      >
        <h3>{typeOf === 'hex' ? 'HEX Color' : 'RGB Color'}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
