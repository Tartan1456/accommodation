import React from 'react';
import '../styles/Card.scss';

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{ title }</h3>
      { children }
    </div>
  )
};

export default Card;