import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header>
        <nav>
          <h1 className='logo'>WeBucks</h1>
          <ul>
            <li>
              <a className='navLink' href='#'>
                COFFEE
              </a>
            </li>
            <li>
              <a className='navLink' href='#'>
                MENU
              </a>
            </li>
            <li>
              <a className='navLink' href='#'>
                STORE
              </a>
            </li>
            <li>
              <a className='navLink' href='#'>
                WHAT'S NEW
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
