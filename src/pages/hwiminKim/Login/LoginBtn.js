import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginBtn.scss';

class LoginBtn extends Component {
  render() {
    const loginBtnActivate = this.props.loginBtnActivate();
    return (
      <div className='LoginBtn'>
        <button
          className={
            loginBtnActivate
              ? 'loginBtnActivate loginBtn'
              : 'loginBtnDeactivate loginBtn'
          }
          type='button'
        >
          <Link className='loginBtnText' to='/list-hwiminKim'>
            로그인
          </Link>
        </button>
      </div>
    );
  }
}

export default LoginBtn;
