import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginBtn.scss';

class LoginBtn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.state };
  }

  render() {
    return (
      <Link to='/list-wonkooklee'>
        <button
          disabled={this.props.isActive}
          className={this.props.className}
          type={this.props.type}
          form={this.props.form}
        >
          {this.props.children}
        </button>
      </Link>
    );
  }
}

export default LoginBtn;
