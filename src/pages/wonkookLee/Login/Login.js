import React, { Component } from 'react';
import '../../../styles/reset.scss';
import './Login.scss';
import LoginForm from './components/LoginForm';
import Applink from './components/Applink';
import SignUp from './components/SignUp';

class Login extends Component {
  render() {
    return (
      <section className='LoginBody'>
        <article className='Login'>
          <LoginForm onChange={this.handleChange} />
          <SignUp />
          <Applink />
        </article>
      </section>
    );
  }
}

export default Login;
