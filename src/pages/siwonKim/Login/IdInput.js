import React, { Component } from 'react';
import './IdInput.scss';

class IdInput extends Component {
  render() {
    const { isIdValid, handleIdInput } = this.props;

    return (
      <div className='IdInput'>
        <input
          className={isIdValid ? 'boxstyle greenLight' : 'boxstyle'}
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
          onChange={handleIdInput}
        />
      </div>
    );
  }
}

export default IdInput;
