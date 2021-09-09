import React, { Component } from 'react';
import './LoginInput.scss';

class LoginInput extends Component {
  loginWithPressEnter = event => {
    if (event.key !== 'Enter') return;
    this.props.redirectAfterLogin();
  };

  render() {
    const { id, className, validation, type, placeholder } = this.props;
    return (
      <input
        className={className}
        onChange={validation}
        onSubmit={this.loginWithPressEnter}
        type={type}
        id={id}
        placeholder={placeholder}
        spellCheck='false'
      />
    );
  }
}

export default LoginInput;
