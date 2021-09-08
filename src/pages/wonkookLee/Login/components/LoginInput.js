import React, { Component } from 'react';
import './LoginInput.scss';

class LoginInput extends Component {
  render() {
    const { className, onChange, goToPage, type, placeholder } = this.props;
    return (
      <input
        className={className}
        onChange={onChange}
        onKeyPress={goToPage}
        type={type}
        placeholder={placeholder}
        spellCheck='false'
      />
    );
  }
}

export default LoginInput;