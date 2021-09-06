import React, { Component } from 'react';
import './DeInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

class DeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikeOn: false,
    };
  }

  handleLike = e => {
    this.setState({ isLikeOn: !this.state.isLikeOn });
  };

  render() {
    const data = this.props.data;
    return (
      <div className='DeInfo'>
        <div className='contentWrap1'>
          <h2 className='productName'>{data.name}</h2>
          <span className='englishName'>{data.engName}</span>
          <FontAwesomeIcon
            icon={faHeart}
            className={this.state.isLikeOn ? 'likeOn' : 'likeOff'}
            size=''
            onClick={this.handleLike}
          />
        </div>
        <span className='description'>{data.summary}</span>

        <div className='contentWrap2'>
          <span className='tableTitle'>제품 영양 정보</span>
          <span className='tableTitle'>{data.nutritionFacts.servingSize}</span>
        </div>
        <div className='contentWrap3'>
          <div className='col1'>
            <div>
              <span>1회 제공량 (kcal)</span>
              <span className='numbers'>{data.nutritionFacts.kcal}</span>
            </div>
            <div>
              <span>포화지방 (g)</span>
              <span className='numbers'>{data.nutritionFacts.fat}</span>
            </div>
            <div>
              <span>단백질 (g)</span>
              <span className='numbers'>{data.nutritionFacts.protein}</span>
            </div>
          </div>
          <div className='col2'>
            <div>
              <span>나트륨 (mg)</span>
              <span className='numbers'>{data.nutritionFacts.natrium}</span>
            </div>
            <div>
              <span>당류 (g)</span>
              <span className='numbers'>{data.nutritionFacts.sugars}</span>
            </div>
            <div>
              <span>카페인 (mg)</span>
              <span className='numbers'>{data.nutritionFacts.caffeine}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeInfo;
