import React, { Component } from 'react';
import './LoginInput.scss';

class LoginInput extends Component {
  render() {
    const { className, onChange, redirectAfterLogin, type, placeholder } =
      this.props;
    return (
      <input
        className={className}
        onChange={onChange}
        onKeyPress={event => {
          if (event.key !== 'Enter') return;
          redirectAfterLogin();
        }}
        type={type}
        placeholder={placeholder}
        spellCheck='false'
      />
    );
  }
}

export default LoginInput;
