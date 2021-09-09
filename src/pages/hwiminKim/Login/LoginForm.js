import React, { Component } from 'react';
import LoginBtn from './LoginBtn';
import './LoginForm.scss';

class LoginForm extends Component {
  state = {
    id: '',
    pw: '',
  };

  loginBtnActivate = () => {
    const { id, pw } = this.state;
    return id.includes('@') && pw.length > 4;
  };

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    this.loginBtnActivate();
  };

  render() {
    return (
      <form className='LoginForm'>
        <input
          name='id'
          className='idForm'
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
          onChange={this.handleInput}
        />
        <input
          name='pw'
          className='passwordForm'
          type='password'
          placeholder='비밀번호'
          onChange={this.handleInput}
        />
        <LoginBtn loginBtnActivate={this.loginBtnActivate} />
      </form>
    );
  }
}

export default LoginForm;
