import React, { Component } from 'react';

class TopsNav extends Component {
  render() {
    return (
      <nav className='navbar'>
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
      </nav>
    );
  }
}

export default TopsNav;
