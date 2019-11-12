import React from 'react';
import Button from '../components/Button';
import '../styles/Card.scss';

function Card({ title, buttonText, secondaryButton, children }) {
  return (
    <div className="card">
      <h3>{ title }</h3>
      { children }
      <Button
        secondaryButton={secondaryButton}
        text={ buttonText }
      />
    </div>
  )
};

export default Card;