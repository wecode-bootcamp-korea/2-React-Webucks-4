import React, { Component } from 'react';
import './InputBox.scss';

class IdInput extends Component {
  render() {
    const { validity, placeHolder, handleInput, isVisible, isPw } = this.props;
    return (
      <div className='InputBox'>
        <input
          className={validity ? 'boxstyle greenLight' : 'boxstyle'}
          type={!isPw ? 'text' : isVisible ? 'text' : 'password'}
          placeholder={placeHolder}
          onChange={handleInput}
        />
      </div>
    );
  }
}

export default IdInput;
