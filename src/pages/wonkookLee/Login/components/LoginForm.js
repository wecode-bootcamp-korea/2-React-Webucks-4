import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginInput from './LoginInput';
import LoginBtn from './LoginBtn';
import ToggleVisibility from './ToggleVisibility';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidId: false,
      isValidPw: false,
      isPwVisible: false,
    };
  }

  validation = event => {
    const { id, value } = event.target;
    const regExp = {
      id: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      password:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
    };
    this.setState({
      [`isValid${id === 'id' ? 'Id' : 'Pw'}`]: value.match(regExp[id])
        ? true
        : false,
    });
  };

  viewPassword = () => {
    this.setState({ isPwVisible: !this.state.isPwVisible });
  };

  redirectAfterLogin = () => {
    if (!this.state.isValidId || !this.state.isValidPw) return;
    this.props.history.push('/list-wonkooklee');
  };

  render() {
    const { isValidId, isValidPw, isPwVisible } = this.state;
    return (
      <section className='login'>
        <h1 className='loginLogo'>Westabucks</h1>
        <form className='LoginForm auth'>
          <LoginInput
            validation={this.validation}
            redirectAfterLogin={this.redirectAfterLogin}
            id='id'
            className={`inputField id ${isValidId ? 'valid' : ''}`}
            type='text'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <LoginInput
            validation={this.validation}
            redirectAfterLogin={this.redirectAfterLogin}
            id='password'
            className={`inputField password ${isValidPw ? 'valid' : ''}`}
            type={isPwVisible ? 'text' : 'password'}
            placeholder='비밀번호'
          />
          <LoginBtn
            className='btn_login'
            type='submit'
            isValidId={isValidId}
            isValidPw={isValidPw}
          >
            로그인
          </LoginBtn>
          <ToggleVisibility
            isPwVisible={isPwVisible}
            viewPassword={this.viewPassword}
          />
          <div className='divider'>
            <hr />
            <span>또는</span>
          </div>
          <h2 className='facebook__login'>
            <a href='https://www.facebook.com/'>
              <span></span>
              Facebook으로 로그인
            </a>
          </h2>
          <p className='forget'>
            <a
              href='https://www.facebook.com/login/identify'
              target='_blank'
              rel='noreferrer'
            >
              비밀번호를 잊으셨나요?
            </a>
          </p>
        </form>
      </section>
    );
  }
}

export default withRouter(LoginForm);
