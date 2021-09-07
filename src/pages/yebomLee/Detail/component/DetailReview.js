import React, { Component } from 'react';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      newReveiwValue: '',
      reveiwValue: [{ text: '' }],
    };
  }

  getReveiwValue = e => {
    this.setState({
      newReveiwValue: e.target.value,
    });
  };

  addReview = () => {
    this.state.reveiwValue.push({ text: this.state.newReveiwValue });

    this.setState({
      newReveiwValue: '',
      reveiwValue: this.state.reveiwValue,
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.addReview();

      e.target.value = '';
      e.preventDefault();
    }
  };

  render() {
    return (
      <div className='reviewBox'>
        {/* <p className='review'>리뷰</p>
        <div className='userReview1'>
          <span>coffee_lover </span>
          <span>너무 맛있어요!</span>
        </div>
        <div className='userReview2'>
          <span>CHOCO7 </span>
          <span>오늘도 마시러 갑니다.</span>
        </div>
        <div className='userReview3'>
          <span>legend_dev </span>
          <span>진짜 전설이다. 진짜 전설이다.</span>
        </div> */}
        <ul className='userReview4'>
          {this.state.reveiwValue.map(el => (
            <li>{el.text}</li>
          ))}
        </ul>
        <form>
          <input
            onKeyPress={this.handleKeyPress}
            onChange={this.getReveiwValue}
            // value={this.state.newReveiwValue}
            type='text'
            placeholder='리뷰를 입력해주세요.'
          />
        </form>
      </div>
    );
  }
}

export default DetailReview;
