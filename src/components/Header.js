import React from 'react';
import logo from '../img/logo.svg';
import '../styles/Header.scss';

function Header() {
  return(
    <header className="header">
      <a className="header__link" href="https://accommodation.co.uk">
        <img className="header__logo" src={logo} alt="accommodation.co.uk" />
      </a>
      <div>58 West Parade, Liverpool, L3 5NT</div>
    </header>
  )
};

export default Header;