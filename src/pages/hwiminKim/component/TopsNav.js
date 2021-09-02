import React, { Component } from 'react';
import './TopsNav.scss';

class TopsNav extends Component {
  render() {
    return (
      <header className='main-header'>
        <div className='logo-container'>
          <img alt='webucks logo' src='../image/logo1.png' className='logo' />
        </div>
        <nav className='nav-menu'>
          <ul className='nav-menu__items'>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default TopsNav;
