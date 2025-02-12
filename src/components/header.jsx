import React from 'react';
import './css/header.css'

function Header() {
  return (
    <div className="header">
      <nav className="nav">

        <div className="nav__logo" style={{display: 'flex', alignItems: 'center', gap: '5px' }}><img style={{height: '20px'}} src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png" alt="" />cookies</div>
        <ul className="nav__list">
          <li className='nav__item'><a href="#" className="nav__link">Main</a></li>
          <li className='nav__item'><a href="#" className="nav__link">Info</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;