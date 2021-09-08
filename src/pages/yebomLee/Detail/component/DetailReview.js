import React, { Component } from 'react';
import './DetailReview.scss';

class DetailReview extends Component {
  constructor() {
    super();
    this.state = {
      newReviewTxt: '',
      reviewContents: [{ text: '' }],
    };
  }

  getReviewTxt = e => {
    this.setState({
      newReviewTxt: e.target.value,
    });
  };

  addReview = () => {
    this.state.reviewContents.push({ text: this.state.newReviewTxt });

    this.setState({
      newReviewTxt: '',
      reviewContents: this.state.reviewContents,
    });
  };

  handleKeyPress = e => {
    if (e.key !== 'Enter') {
      return;
    }
    e.preventDefault();
    this.addReview();
    e.target.value = '';
  };

  render() {
    return (
      <div className='DetailReview'>
        <p className='review'>리뷰</p>
        <ul className='userReview'>
          <li>
            <span>coffee_lover</span> 너무 맛있어요!
          </li>
          <li>
            <span>CHOCO7</span> 오늘도 마시러 갑니다.
          </li>
          <li>
            <span>legend_dev</span> 진짜 전설이다. 진짜 전설이다.
          </li>
          {this.state.reviewContents.map(thread => (
            <li>{thread.text}</li>
          ))}
        </ul>
        <form>
          <input
            onKeyPress={this.handleKeyPress}
            onChange={this.getReviewTxt}
            type='text'
            placeholder='리뷰를 입력해주세요.'
          />
        </form>
      </div>
    );
  }
}

export default DetailReview;
