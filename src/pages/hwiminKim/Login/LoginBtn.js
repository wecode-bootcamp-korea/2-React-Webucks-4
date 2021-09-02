import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginBtn.scss';

class LoginBtn extends Component {
  render() {
    const isIdValid = this.props.validation.isIdValid;
    const isPwValid = this.props.validation.isPwValid;
    return (
      <button
        className={
          isIdValid && isPwValid ? 'loginBtnActivate' : 'loginBtnDeactivate'
        }
        type='button'
      >
        <Link className='loginBtn' to='/list-hwiminKim'>
          로그인
        </Link>
      </button>
    );
  }
}

export default LoginBtn;
