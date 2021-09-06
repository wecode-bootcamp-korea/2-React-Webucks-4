import React, { Component } from 'react';
import './PwInput.scss';

class PwInput extends Component {
  render() {
    const { isPwValid, seePw, handlePwInput } = this.props;

    return (
      <div className='PwInput'>
        <input
          className={isPwValid ? 'boxstyle greenLight' : 'boxstyle'}
          type={seePw ? 'text' : 'password'}
          placeholder='비밀번호'
          onChange={handlePwInput}
        />
      </div>
    );
  }
}

export default PwInput;
