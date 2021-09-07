import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      isVaildId: false,
      isVaildPw: false,
    };
  }

  isVaildId = e => {
    e.target.value.includes('@')
      ? this.setState({ isVaildId: true })
      : this.setState({ isVaildId: false });
  };

  isVaildPw = e => {
    e.target.value.length >= 5
      ? this.setState({ isVaildPw: true })
      : this.setState({ isVaildPw: false });
  };

  goToList = () => {
    if (this.state.isVaildId && this.state.isVaildPw) {
      this.props.history.push('/list-yebomlee');
    }
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.goToList();
      e.preventDefault();
    }
  };

  render() {
    return (
      <form action='' className='inputWrap'>
        <input
          onChange={this.isVaildId}
          onKeyPress={this.handleKeyPress}
          type='text'
          id='userId'
          placeholder='전화번호, 사용자 이름 또는 이메일'
        />
        <input
          onChange={this.isVaildPw}
          onKeyPress={this.handleKeyPress}
          type='password'
          id='userPassword'
          placeholder='비밀번호'
        />
        <button
          onClick={this.goToList}
          className={
            this.state.isVaildId && this.state.isVaildPw
              ? 'loginButton active'
              : 'loginButton'
          }
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
