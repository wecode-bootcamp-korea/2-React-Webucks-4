import React, { Component } from 'react';
import './FacebookLogIn.scss';

class FacebookLogIn extends Component {
  render() {
    return (
      <>
        <h2 className={this.props.className}>
          <a href={this.props.link}>
            <span></span>
            {this.props.text}
          </a>
        </h2>
        <p className='forget'>
          <a href='http://localhost:3000/'>비밀번호를 잊으셨나요?</a>
        </p>
      </>
    );
  }
}

export default FacebookLogIn;
