import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <div className='backgroundBox'>
          <span className='mainLogo'>WeBucks</span>
          <form action='' className='inputWrap'>
            <input
              type='text'
              id='userId'
              placeholder='전화번호, 사용자 이름 또는 이메일'
            />
            <input type='password' id='userPassword' placeholder='비밀번호' />
            <button className='loginButton'>
              <Link className='link' to='/list-yebomlee'>
                로그인
              </Link>
            </button>
          </form>
          <a href='#' className='forgotPassword'>
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
