import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginBtn.scss';

class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state };
  }

  render() {
    const { isActive, className, type, form, children } = this.props;
    return (
      <Link to='/list-wonkooklee'>
        <button
          disabled={isActive}
          className={className}
          type={type}
          form={form}
        >
          {children}
        </button>
      </Link>
    );
  }
}

export default LoginBtn;
