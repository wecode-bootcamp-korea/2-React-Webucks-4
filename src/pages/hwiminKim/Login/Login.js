import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/reset.scss';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      isIdValid: false,
      isPwValid: false,
    };
    this.handleId = this.handleId.bind(this);
    this.handlePw = this.handlePw.bind(this);
  }

  handleId(event) {
    // this.setState({ id: event.target.value });
    if (event.target.value.includes('@')) {
      this.setState(state => {
        return { isIdValid: true };
      });
    } else {
      this.setState(state => {
        return { isIdValid: false };
      });
    }

    console.log(this.state);
  }

  handlePw(event) {
    // this.setState({ pw: event.target.value });
    if (event.target.value.length > 4) {
      this.setState(state => {
        return { isPwValid: true };
      });
    } else {
      this.setState(state => {
        return { isPwValid: false };
      });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className='Login'>
        <section className='loginBox'>
          <img
            src='../../images/logo1.png'
            alt='webucks logo'
            className='webucksLogo'
          />

          <form className='loginForm'>
            <input
              className='idForm'
              type='text'
              placeholder='전화번호, 사용자 이름 또는 이메일'
              onChange={this.handleId}
            />
            <input
              className='passwordForm'
              type='password'
              placeholder='비밀번호'
              onChange={this.handlePw}
            />
            <button
              className={
                this.state.isIdValid && this.state.isPwValid
                  ? 'loginBtnActivate'
                  : 'loginBtnDeactivate'
              }
              type='button'
              disabled
            >
              <Link to='/list'>로그인</Link>
            </button>
          </form>

          <p className='findPassword'>
            <a href='#'>비밀번호를 잊으셨나요?</a>
          </p>
        </section>
      </div>
    );
  }
}

export default Login;
