import React, { Component } from 'react';
import './ReviewList.scss';
import Review from './Review';

class ReviewList extends Component {
  id = 0;
  state = {
    newReview: '',
    reviews: [],
  };
  handleChange = e => {
    this.setState({
      newReview: e.target.value,
    });
  };

  createReview = e => {
    // const { newReview } = this.state.newReview;
    if (e.key === 'Enter') {
      this.setState({
        reviews: this.state.reviews.concat({
          userReview: this.state.newReview,
          id: this.id++,
        }),
      });
    }
    // console.log(this.state);
  };
  render() {
    const { reviews } = this.state;

    return (
      <>
        <div className='reviewContainer'>
          <h3 className='reviewHeader'>리뷰</h3>
          <ul className='items'>
            {reviews.map(review => {
              return <Review key={review.id} review={review.userReview} />;
            })}
            {/* {JSON.stringify(this.state.reviews)} */}
          </ul>
        </div>
        <input
          name='review'
          className='reviewInput'
          type='text'
          placeholder='리뷰를 입력해주세요.'
          onChange={this.handleChange}
          onKeyPress={this.createReview}
        />
      </>
    );
  }
}

export default ReviewList;
