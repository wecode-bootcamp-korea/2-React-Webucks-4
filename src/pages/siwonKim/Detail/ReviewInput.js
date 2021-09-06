import React, { Component } from 'react';
import './ReviewInput.scss';

class ReviewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='ReviewInput'>
        <input
          className='inputId'
          type='text'
          placeholder='이름'
          onKeyUp={this.props.handleInputId}
        />
        <input
          className='inputText'
          type='text'
          placeholder='리뷰를 입력해주세요'
          onKeyUp={this.props.handleInputText}
        />
      </div>
    );
  }
}

export default ReviewInput;
