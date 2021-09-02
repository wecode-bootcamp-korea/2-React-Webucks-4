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
    this.validation = this.validation.bind(this);
    this.viewPassword = this.viewPassword.bind(this);
    this.activateBtn = this.activateBtn.bind(this);

    this.state = {
      isValidId: false,
      isValidPw: false,
      isPwVisible: false,
      isBtnActive: false,
    };
  }

  validation(e) {
    if (e.target.classList.contains('id')) {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const result = e.target.value.match(emailRegex) ? true : false;
      this.setState({ isValidId: result });
    }
    if (e.target.classList.contains('password')) {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
      const result = e.target.value.match(passwordRegex) ? true : false;
      this.setState({ isValidPw: result });
    }
    this.activateBtn();
  }

  activateBtn() {
    if (this.state.isValidId && this.state.isValidPw) {
      this.setState({ isBtnActive: true });
    } else {
      this.setState({ isBtnActive: false });
    }
  }

  viewPassword(e) {
    this.setState({ isPwVisible: !this.state.isPwVisible });
  }

  render() {
    return (
      <section className='login'>
        <Logo link='#' text='Westabucks' />
        <form action='./list.html' method='get' className='LoginForm auth'>
          <LoginInput
            onChange={this.validation}
            className={`inputField id ${this.state.isValidId ? 'valid' : ''}`}
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <LoginInput
            onChange={this.validation}
            className={`inputField password ${
              this.state.isValidPw ? 'valid' : ''
            }`}
            type={this.state.isPwVisible ? 'text' : 'password'}
            placeholder='비밀번호'
          />
          <LoginBtn
            className='btn_login'
            type='submit'
            form='submit'
            isActive={!this.state.isBtnActive}
          >
            로그인
          </LoginBtn>
          <ToggleVisibility
            iconToggle={this.state.isPwVisible}
            toggleType={this.viewPassword}
          />
          <Divider className='divider' text='또는' />
          <FacebookLogIn
            className='facebook__login'
            link='http://localhost:3000/'
            text='Facebook으로 로그인'
          />
        </form>
      </section>
    );
  }
}

export default LoginForm;
