
import React, { useState } from 'react';

const Keyboard: React.FC<{ onKeyPress: (key: string) => void }> = ({ onKeyPress }) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const [inputValue, setInputValue] = useState('');

  const handleClick = (key: string) => {
    setInputValue(inputValue + key);
    onKeyPress(key);
  };


  return (
    <div className="keyboard-container">
      <div className="keyboard-row">
        {alphabet.split('').map((letter, index) => (
          <button key={index} className="keyboard-button" onClick={() => handleClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;

