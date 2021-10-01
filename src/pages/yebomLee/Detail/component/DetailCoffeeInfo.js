import React, { Component } from 'react';
import LikeHeart from '../../components/LikeHeart';
import './DetailCoffeeInfo.scss';

class DetailCoffeeInfo extends Component {
  constructor() {
    super();
    this.state = {
      fillHeart: false,
    };
  }

  fillLikeHeart = () => {
    this.setState({
      fillHeart: !this.state.fillHeart,
    });
  };

  render() {
    const { name, engName, summary, nutritionFacts } = this.props;
    const {
      servingSize,
      kcal,
      fat,
      protein,
      natrium,
      sugars,
      caffeine,
      allergen,
    } = nutritionFacts;
    return (
      <div className='DetailCoffeeInfo'>
        <div className='menuNameBox'>
          <p className='nameKOR'>{name}</p>
          <p className='nameENG'>{engName}</p>
          <LikeHeart
            fillHeart={this.state.fillHeart}
            fillLikeHeart={this.fillLikeHeart}
            size={'2rem'}
          />
        </div>
        <p className='explainCoffee'>{summary}</p>
        <div className='nutritionBox'>
          <span>제품 영양 정보</span>
          <span>{servingSize}</span>
        </div>
        <div className='table'>
          <table className='leftTable'>
            <tr>
              <td>1회 제공량 (kcal)</td>
              <td className='rightalign'>{kcal}</td>
            </tr>
            <tr>
              <td>포화지방 (g)</td>
              <td className='rightalign'>{fat}</td>
            </tr>
            <tr>
              <td>단백질 (g)</td>
              <td className='rightalign'>{protein}</td>
            </tr>
          </table>
          <table className='rightTable'>
            <tr>
              <td>나트륨 (mg)</td>
              <td className='rightalign'>{natrium}</td>
            </tr>
            <tr>
              <td>당류 (g)</td>
              <td className='rightalign'>{sugars}</td>
            </tr>
            <tr>
              <td>카페인 (mg)</td>
              <td className='rightalign'>{caffeine}</td>
            </tr>
          </table>
        </div>
        <div className='allergyBox'>
          <p>알레르기 유발 요인: {allergen}</p>
        </div>
      </div>
    );
  }
}

export default DetailCoffeeInfo;
