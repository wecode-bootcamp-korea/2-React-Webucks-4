import React, { Component } from 'react';
import Review from './Review';
import './ReviewList.scss';

class ReviewList extends Component {
  inputRef = React.createRef();
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

  handleRemove = id => {
    const { reviews } = this.state;
    this.setState({
      reviews: reviews.filter(review => review.id !== id),
    });
  };

  createReview = e => {
    if (e.key === 'Enter') {
      this.setState({
        reviews: this.state.reviews.concat({
          userReview: this.state.newReview,
          id: this.id++,
        }),
      });
      this.inputRef.current.value = '';
    }
  };

  render() {
    const { reviews } = this.state;
    return (
      <>
        <div className='reviewContainer'>
          <h3 className='reviewHeader'>리뷰</h3>
          <ul className='items'>
            {reviews.map(review => {
              return (
                <Review
                  key={review.id}
                  review={review.userReview}
                  onRemove={this.handleRemove}
                  data={review}
                />
              );
            })}
          </ul>
        </div>
        <input
          name='review'
          className='reviewInput'
          type='text'
          placeholder='리뷰를 입력해주세요.'
          onChange={this.handleChange}
          onKeyPress={this.createReview}
          ref={this.inputRef}
        />
      </>
    );
  }
}

export default ReviewList;