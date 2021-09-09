import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/reset.scss';
import './Login.scss';
import LoginForm from './components/LoginForm';

class Login extends Component {
  render() {
    return (
      <section className='LoginBody'>
        <article className='Login'>
          <LoginForm onChange={this.handleChange} />
          <section className='signup'>
            <p>
              계정이 없으신가요? <Link to='/list-wonkooklee'>가입하기</Link>
            </p>
          </section>
          <div className='applink'>
            <div className='app__mention'>앱을 다운로드하세요.</div>
            <div className='link__btns'>
              <span className='link__btn appstore__btn'>
                <a
                  href='https://apps.apple.com/us/app/starbucks/id331177714'
                  target='_blank'
                  rel='noreferrer'
                >
                  appstore
                </a>
              </span>
              <span className='link__btn googleplay__btn'>
                <a
                  href='https://play.google.com/store/apps/details?id=com.starbucks.mobilecard&hl=en&gl=US'
                  target='_blank'
                  rel='noreferrer'
                >
                  playstore
                </a>
              </span>
            </div>
          </div>
        </article>
      </section>
    );
  }
}

export default Login;
