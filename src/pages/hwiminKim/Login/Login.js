import React, { Component } from 'react';

import LoginFrom from './LoginForm';
import './Login.scss';
import LoginFindPw from './LoginFindPw';

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <section className='loginBox'>
          <img
            src='../image/logo1.png'
            alt='webucks logo'
            className='webucksLogo'
          />
          <LoginFrom />
          <LoginFindPw />
        </section>
      </div>
    );
  }
}

export default Login;
