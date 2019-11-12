import React from 'react';
import '../styles/Button.scss';

function Button({text}) {
  return (
    <button class="button">
      {text}
    </button>
  )
};

export default Button;