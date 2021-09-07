import React, { Component } from 'react';
import './TopsNav.scss';

class TopsNav extends Component {
  render() {
    return (
      <nav className='navbar'>
        <div className='fix'>
          <a id='logo' href='#!'>
            <img src='/images/logo.PNG' alt='logo' />
          </a>
          <ul id='navMenu'>
            <li>
              <a href='#!'>COFFEE</a>
            </li>
            <li>
              <a href='#!'>MENU</a>
            </li>
            <li>
              <a href='#!'>STORE</a>
            </li>
            <li>
              <a href='#!'>WHAT'S NEW</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopsNav;
