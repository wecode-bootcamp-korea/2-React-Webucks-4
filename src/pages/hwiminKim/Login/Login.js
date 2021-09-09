import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginFindPw from './LoginFindPw';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <section className='loginBox'>
          <img
            alt='webucks logo'
            src='/img/hwiminKim/logo1.png'
            className='webucksLogo'
          />
          <LoginForm />
          <LoginFindPw />
        </section>
      </div>
    );
  }
}

export default Login;
