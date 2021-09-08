import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idCheck: false,
      pwCheck: false,
    };
  }

  handleIdInput = event => {
    const idCheck = event.target.value.includes('@');
    this.setState({ idCheck });
  };

  handlePwInput = event => {
    const pwCheck = event.target.value.length >= 5;
    this.setState({ pwCheck });
  };

  render() {
    return (
      <div id='loginPage'>
        <img src='/images/logo.PNG' className='logo' alt='webucks' />
        <div className='loginBox'>
          <input
            name='ID'
            type='text'
            placeholder='전화번호,사용자 이름 또는 이메일'
            onChange={this.handleIdInput}
          />
          <input
            name='PW'
            type='password'
            placeholder='비밀번호'
            onChange={this.handlePwInput}
          />
          <Link to='/List-wonyoungKim'>
            <button
              className={
                this.state.idCheck && this.state.pwCheck
                  ? 'loginBtnTurn'
                  : 'loginBtn'
              }
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
