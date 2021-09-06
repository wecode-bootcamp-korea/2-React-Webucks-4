import React, { Component } from 'react';
import './IdInput.scss';

class IdInput extends Component {
  render() {
    return (
      <input
        className={this.props.idOn ? 'boxstyle greenLight' : 'boxstyle'}
        type='text'
        placeholder='전화번호, 사용자 이름 또는 이메일'
        onChange={this.props.changeId}
      />
    );
  }
}

export default IdInput;
