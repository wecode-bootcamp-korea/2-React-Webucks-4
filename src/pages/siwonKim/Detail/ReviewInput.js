import React, { Component } from 'react';
import './ReviewInput.scss';

class ReviewInput extends Component {
  render() {
    const { handleInputId, handleInputText } = this.props;

    return (
      <div className='ReviewInput'>
        <input
          className='inputId'
          type='text'
          placeholder='이름'
          onKeyUp={handleInputId}
        />
        <input
          className='inputText'
          type='text'
          placeholder='리뷰를 입력해주세요'
          onKeyUp={handleInputText}
        />
      </div>
    );
  }
}

export default ReviewInput;
