import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './DeInfo.scss';

class DeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLikeOn: false,
    };
  }

  handleLike = () => {
    this.setState({ isLikeOn: !this.state.isLikeOn });
  };

  render() {
    const { name, engName, summary, nutritionFacts } = this.props.data;
    const { servingSize, kcal, fat, protein, natrium, sugars, caffeine } =
      nutritionFacts;
    const { isLikeOn } = this.state;

    return (
      <div className='DeInfo'>
        <div className='contentWrap1'>
          <h2 className='productName'>{name}</h2>
          <span className='englishName'>{engName}</span>
          <FontAwesomeIcon
            icon={faHeart}
            className={isLikeOn ? 'likeOn' : 'likeOff'}
            onClick={this.handleLike}
          />
        </div>
        <span className='description'>{summary}</span>

        <div className='contentWrap2'>
          <span className='tableTitle'>제품 영양 정보</span>
          <span className='tableTitle'>{servingSize}</span>
        </div>
        <div className='contentWrap3'>
          <div className='col1'>
            <div>
              <span>1회 제공량 (kcal)</span>
              <span className='numbers'>{kcal}</span>
            </div>
            <div>
              <span>포화지방 (g)</span>
              <span className='numbers'>{fat}</span>
            </div>
            <div>
              <span>단백질 (g)</span>
              <span className='numbers'>{protein}</span>
            </div>
          </div>
          <div className='col2'>
            <div>
              <span>나트륨 (mg)</span>
              <span className='numbers'>{natrium}</span>
            </div>
            <div>
              <span>당류 (g)</span>
              <span className='numbers'>{sugars}</span>
            </div>
            <div>
              <span>카페인 (mg)</span>
              <span className='numbers'>{caffeine}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeInfo;
