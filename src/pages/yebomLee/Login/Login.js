import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isActive: false,
    };
  }

  inputId = e => {
    this.setState({
      idValue: e.target.value,
    });
  };
  inputPw = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  ButtonActive = () => {
    this.state.idValue.includes('@') && this.state.pwValue.length >= 5
      ? this.setState({ isActive: true })
      : this.setState({ isActive: false });
  };

  render() {
    console.log(this.state);
    return (
      <div className='Login'>
        <div className='backgroundBox'>
          <span className='mainLogo'>WeBucks</span>
          <form action='' className='inputWrap'>
            <input
              onChange={this.inputId}
              onKeyUp={this.ButtonActive}
              type='text'
              id='userId'
              placeholder='전화번호, 사용자 이름 또는 이메일'
            />
            <input
              onChange={this.inputPw}
              onKeyUp={this.ButtonActive}
              type='password'
              id='userPassword'
              placeholder='비밀번호'
            />
            <button
              className={
                this.state.isActive ? 'loginButton active' : 'loginButton'
              }
            >
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
