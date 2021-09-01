import React, { Component } from 'react';
import { addLoginBodyStyle, removeLoginBodyStyle } from '../utils';
import '../../../styles/reset.scss';
import './Login.scss';
import LoginForm from './components/LoginForm';
import Applink from './components/Applink';
import SignUp from './components/SignUp';

class Login extends Component {
  componentDidMount() {
    addLoginBodyStyle();
  }

  componentWillUnmount() {
    removeLoginBodyStyle();
  }

  render() {
    return (
      <article className='Login'>
        <LoginForm onChange={this.handleChange} />
        <SignUp />
        <Applink />
      </article>
    );
  }
}

export default Login;
