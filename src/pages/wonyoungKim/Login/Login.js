import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userPW: '',
      idCheck: false,
      pwCheck: false,
      btnColor: '#c4e1fb',
    };
  }

  handleIdInput = event => {
    this.setState({ userName: event.target.value });
    if (event.target.value.includes('@')) {
      this.setState({ idCheck: true });
    }
  };

  handlePwInput = event => {
    this.setState({ userPW: event.target.value });
    if (event.target.value.length >= 5) {
      this.setState({ pwCheck: true }, () => this.btnChangeColor());
    }
  };

  btnChangeColor = () => {
    if (this.state.idCheck && this.state.pwCheck) {
      this.setState({ btnColor: '#1a6fb9' });
    }
  };

  render() {
    return (
      <div id='loginPage'>
        <img src='/images/logo.PNG' className='logo' alt='webucks' />
        <div className='loginBox'>
          <input
            className='userName'
            type='text'
            placeholder='전화번호,사용자 이름 또는 이메일'
            onChange={this.handleIdInput}
          />
          <input
            className='userPW'
            type='password'
            placeholder='비밀번호'
            onChange={this.handlePwInput}
          />
          <Link to='/List-wonyoungKim'>
            <button
              className='loginBtn'
              style={{ backgroundColor: this.state.btnColor }}
              onClick={this.btnClick}
            >
              로그인
            </button>
          </Link>
        </div>
        <a href='#!'>비밀번호를 잊으셨나요?</a>
        <script src='js/login.js'></script>
      </div>
    );
  }
}

export default Login;
