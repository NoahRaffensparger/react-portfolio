import React, { useEffect, useState } from 'react';
import './typing-effect.css';

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TypingEffect = () => {
  const text = "h ello world, I'm Noah Raffensparger;";
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, 75); // Adjust typing speed here
      }
    };

    type(); // Start typing effect

    return () => clearTimeout(type); // Cleanup
  }, [text]);

  return (
    <div className="typing-effect">
      <span className="typed-text">{displayedText}</span>
    </div>
  );
};

export default TypingEffect;
