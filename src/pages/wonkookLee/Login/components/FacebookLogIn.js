import React, { Component } from 'react';
import './FacebookLogIn.scss';

class FacebookLogIn extends Component {
  render() {
    const { className, link, text } = this.props;
    return (
      <>
        <h2 className={className}>
          <a href={link}>
            <span></span>
            {text}
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
      </>
    );
  }
}

export default FacebookLogIn;
