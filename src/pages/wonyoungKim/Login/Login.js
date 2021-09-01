import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div id="loginPage">
        <img src="/images/logo.PNG" className="logo" alt="webucks" />
        <div className="loginBox">
          <input className="userName" type="text" placeholder="전화번호,사용자 이름 또는 이메일" /> 
          <input className="passWord" type="password" placeholder="비밀번호" /> 
          <Link to="/List">
            <button id="loginBtn">로그인</button>
          </Link>
        </div>
        <a href="#!">비밀번호를 잊으셨나요?</a>
        <script src="js/login.js"></script>
      </div>
    );
  }
}

export default Login;
