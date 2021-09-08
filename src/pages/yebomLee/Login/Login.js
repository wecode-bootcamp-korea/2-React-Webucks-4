import React, { Component } from 'react';
import LoginInput from './component/LoginInput';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <div className='loginBox'>
          <span className='mainLogo'>WeBucks</span>
          <LoginInput />
          <a href='/' className='forgotPassword'>
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
