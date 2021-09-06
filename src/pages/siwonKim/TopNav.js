import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='TopNav'>
        <header className='header'>
          <Link to='/Login-siwonkim'>
            <span className='logo'>WeBucks</span>
          </Link>
          <nav className='nav'>
            <span className=''>COFFEE</span>
            <span className=''>MENU</span>
            <span className=''>STORE</span>
            <span className=''>WHAT'S NEW</span>
          </nav>
        </header>
      </div>
    );
  }
}

export default TopNav;
