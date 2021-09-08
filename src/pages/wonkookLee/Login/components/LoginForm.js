import React, { Component } from 'react';
import Logo from './Logo';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import Divider from './Divider';
import FacebookLogIn from './FacebookLogIn';
import ToggleVisibility from './ToggleVisibility';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidId: false,
      isValidPw: false,
      isPwVisible: false,
      isBtnActive: false,
    };
  }

  validation = event => {
    if (event.target.classList.contains('id')) {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      this.setState({ isValidId: event.target.value.match(emailRegex) });
    }
    if (event.target.classList.contains('password')) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      this.setState({ isValidPw: event.target.value.match(passwordRegex) });
    }
    this.activateBtn();
  };

  activateBtn = () => {
    if (this.state.isValidId && this.state.isValidPw) {
      this.setState({ isBtnActive: true });
    } else {
      this.setState({ isBtnActive: false });
    }
  };

  viewPassword = () => {
    this.setState({ isPwVisible: !this.state.isPwVisible });
  };

  redirectAfterLogin = () => {
    if (!this.state.isBtnActive) return;
    window.location.href = '/list-wonkooklee';
  };

  render() {
    const { isValidId, isValidPw, isPwVisible, isBtnActive } = this.state;
    return (
      <section className='login'>
        <Logo link='#' text='Westabucks' />
        <form className='LoginForm auth'>
          <LoginInput
            onChange={this.validation}
            redirectAfterLogin={this.redirectAfterLogin}
            className={`inputField id ${isValidId ? 'valid' : ''}`}
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <LoginInput
            onChange={this.validation}
            redirectAfterLogin={this.redirectAfterLogin.bind(this)}
            className={`inputField password ${isValidPw ? 'valid' : ''}`}
            type={isPwVisible ? 'text' : 'password'}
            placeholder='비밀번호'
          />
          <LoginBtn
            className='btn_login'
            type='submit'
            form='submit'
            isActive={!isBtnActive}
          >
            로그인
          </LoginBtn>
          <ToggleVisibility
            iconToggle={isPwVisible}
            toggleType={this.viewPassword}
          />
          <Divider className='divider' text='또는' />
          <FacebookLogIn
            className='facebook__login'
            link='https://www.facebook.com/'
            text='Facebook으로 로그인'
          />
        </form>
      </section>
    );
  }
}

export default LoginForm;
