import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginBtn.scss';

class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state };
  }

  render() {
    const { isValidId, isValidPw, className, type, children } = this.props;
    return (
      <Link to='/list-wonkooklee'>
        <button
          disabled={!(isValidId && isValidPw)}
          className={className}
          type={type}
        >
          {children}
        </button>
      </Link>
    );
  }
}

export default LoginBtn;
