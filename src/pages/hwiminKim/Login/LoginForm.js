import React, { Component } from 'react';
import LoginBtn from './LoginBtn';
import './LoginForm.scss';

class LoginForm extends Component {
  state = {
    isIdValid: false,
    isPwValid: false,
  };

  handleId = event => {
    const isIdValid = event.target.value.includes('@') ? true : false;
    this.setState({ isIdValid });
  };

  handlePw = event => {
    const isPwValid = event.target.value.length > 4 ? true : false;
    this.setState({ isPwValid });
  };

  render() {
    return (
      <form className='loginForm'>
        <input
          name='id'
          className='idForm'
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
          onChange={this.handleId}
        />
        <input
          name='password'
          className='passwordForm'
          type='password'
          placeholder='비밀번호'
          onChange={this.handlePw}
        />
        <LoginBtn validation={this.state} />
      </form>
    );
  }
}

export default LoginForm;
