import React, { Component } from 'react';
import './Logo.scss';

class Logo extends Component {
  render() {
    return (
      <h1 className='loginLogo'>
        <a href={this.props.link}>{this.props.text}</a>
      </h1>
    );
  }
}

export default Logo;
