import React, { Component } from 'react';
import './LoginInput.scss';

class LoginInput extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        onChange={this.props.onChange}
        onKeyPress={this.props.goToPage}
        type={this.props.type}
        placeholder={this.props.placeholder}
        spellCheck='false'
      />
    );
  }
}

export default LoginInput;
