import React, { Component } from 'react';
import './TopsNav.scss';

class TopsNav extends Component {
  render() {
    return (
      <header className='TopsNav'>
        <div className='logoContainer'>
          <img
            alt='webucks logo'
            src='/img/hwiminKim/logo-removedbg.png'
            className='logo'
          />
        </div>
        <nav className='navMenu'>
          <ul className='navMenuItems'>
            <li className='navMenuItem'>COFFEE</li>
            <li className='navMenuItem'>MENU</li>
            <li className='navMenuItem'>STORE</li>
            <li className='navMenuItem'>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default TopsNav;
