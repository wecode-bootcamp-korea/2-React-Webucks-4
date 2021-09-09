import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginFindPw.scss';

class LoginFindPw extends Component {
  render() {
    return (
      <p className='LoginFindPw'>
        <Link className='findPassword' to='#'>
          비밀번호를 잊으셨나요?
        </Link>
      </p>
    );
  }
}

export default LoginFindPw;
