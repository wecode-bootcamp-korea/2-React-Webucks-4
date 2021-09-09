import React, { Component } from 'react';
import ReviewThread from './ReviewThread';
import './ReviewList.scss';

class ReviewList extends Component {
  id = 0;
  state = {
    reviews: [],
  };

  deleteReview = id => {
    const { reviews } = this.state;
    this.setState({
      reviews: reviews.filter(review => review.id !== id),
    });
  };

  createReview = event => {
    event.preventDefault();
    let reviewText = event.target.reviewInput.value;
    const { reviews } = this.state;
    this.setState({
      reviews: reviews.concat({
        reviewText,
        id: this.id++,
        isLiked: false,
      }),
    });
    event.target.reset();
  };

  changeHeartBtnColor = id => {
    const reviews = this.state.reviews.map(item => {
      return item.id === id
        ? {
            ...item,
            isLiked: !item.isLiked,
          }
        : item;
    });

    this.setState({ reviews });
  };

  render() {
    const { reviews } = this.state;
    return (
      <form className='ReviewList' onSubmit={this.createReview}>
        <h3 className='reviewHeader'>리뷰</h3>
        <ul className='items'>
          {reviews.map(reviewThread => {
            const { id, isLiked, reviewText } = reviewThread;
            const deleteReview = this.deleteReview;
            const changeHeartBtnColor = this.changeHeartBtnColor;
            return (
              <ReviewThread
                key={id}
                id={id}
                isLiked={isLiked}
                reviewText={reviewText}
                deleteReview={deleteReview}
                reviewThread={reviewThread}
                changeHeartBtnColor={changeHeartBtnColor}
              />
            );
          })}
        </ul>

        <input
          name='reviewInput'
          className='reviewInput'
          type='text'
          placeholder='리뷰를 입력해주세요.'
        />
      </form>
    );
  }
}

export default ReviewList;
