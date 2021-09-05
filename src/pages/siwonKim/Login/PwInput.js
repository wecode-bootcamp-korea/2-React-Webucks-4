import React, { Component } from 'react';
import './PwInput.scss';

class PwInput extends Component {
  render() {
    return (
      <input
        className={this.props.pwOn ? 'boxstyle greenLight' : 'boxstyle'}
        type={this.props.seePw ? 'text' : 'password'}
        placeholder='비밀번호'
        onChange={this.props.changePw}
      />
    );
  }
}

export default PwInput;
