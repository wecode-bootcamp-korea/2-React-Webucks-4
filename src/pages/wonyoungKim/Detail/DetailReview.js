import React from 'react';

class DetailReview extends React.Component {
  render() {
    return (
      <>
        <div className='review'>
          <p className='reviewTitle'>리뷰</p>
          <div>
            <span className='reviewId'>coffee_lover</span>
            <span className='reviewText'>너무 맛있어요!</span>
          </div>
          <div>
            <span className='reviewId'>CHOCO7</span>
            <span className='reviewText'>너무 너무 맛있어요!</span>
          </div>
          <div>
            <span className='reviewId'>coffee_lover</span>
            <span className='reviewText'>너무 X 100 맛있어요!</span>
          </div>
        </div>
        <div className='reviewEnter'>
          <p>리뷰를 입력해주세요.</p>
        </div>
      </>
    );
  }
}

export default DetailReview;
