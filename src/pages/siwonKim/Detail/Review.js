import React, { Component } from 'react';
import ReviewList from './ReviewList';
import ReviewInput from './ReviewInput';
import './Review.scss';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [
        { id: 1, userId: 'ksw', text: '이거 존맛', likeOn: true },
        { id: 2, userId: 'twosome', text: '이거 no맛', likeOn: false },
      ],
    };
    this.maxId = 2;
    this.idInput = '';
    this.textInput = '';
  }

  handleInputId = e => {
    let { value } = e.target;
    if (value.length > 10) {
      alert('ID는 10글자를 초과할 수 없습니다.');
      e.target.value = '';
      return null;
    }
    this.idInput = value;
  };

  handleInputText = e => {
    if (e.key === 'Enter') {
      // id valid test
      if (!this.idInput) {
        alert('아이디를 입력하세요!');
        return null;
      }
      // text valid test
      if (!this.textInput) {
        alert('리뷰를 입력하세요!');
        return null;
      }
      let newReview = Array.from(this.state.reviewList);
      newReview.push({
        id: ++this.maxId,
        userId: this.idInput,
        text: this.textInput,
        likeOn: false,
      });
      this.setState(() => {
        return { reviewList: newReview };
      });
      this.textInput = '';
      e.target.value = '';
    }
    this.textInput = e.target.value;
  };

  togleLikeOrDeleteState = (id, cmd) => {
    const newReviewList = Array.from(this.state.reviewList);
    for (let i = 0; i < newReviewList.length; i++)
      if (newReviewList[i].id === id) {
        if (cmd === 't') newReviewList[i].likeOn = !newReviewList[i].likeOn;
        else if (cmd === 'd') newReviewList.splice(i, 1);
        break;
      }
    this.setState(() => ({ reviewList: newReviewList }));
  };

  render() {
    const { reviewList } = this.state;
    return (
      <div className='Review'>
        <h2 className='reviewTitle'>리뷰</h2>

        <ul className='liWraper'>
          {reviewList.map(item => (
            <ReviewList
              data={item}
              togleLikeOrDeleteState={this.togleLikeOrDeleteState}
            />
          ))}
        </ul>
        <ReviewInput
          handleInputId={this.handleInputId}
          handleInputText={this.handleInputText}
        />
      </div>
    );
  }
}

export default Review;
