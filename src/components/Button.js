import React from 'react';
import '../styles/Button.scss';

function Button({ text, secondaryButton }) {
  return (
    <button className={`button ${secondaryButton ? "button--secondary" : ""}`}>
      { text }
    </button>
  )
};

export default Button;