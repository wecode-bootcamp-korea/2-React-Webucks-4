import React, { Component } from 'react';
import './SignUp.scss';

export default class SignUp extends Component {
  render() {
    return (
      <section className='signup'>
        <p>
          계정이 없으신가요? <a href='/list-wonkooklee'>가입하기</a>
        </p>
      </section>
    );
  }
}
