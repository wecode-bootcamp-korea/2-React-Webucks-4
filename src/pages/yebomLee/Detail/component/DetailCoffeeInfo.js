import React, { Component } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import './DetailCoffeeInfo.scss';

class DetailCoffeeInfo extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    const {
      servingSize,
      kcal,
      fat,
      protein,
      natrium,
      sugars,
      caffeine,
      allergen,
    } = this.props.nutritionFacts;
    return (
      <div className='DetailCoffeeInfo'>
        <div className='menuNameBox'>
          <p className='nameKOR'>{this.props.name}</p>
          <p className='nameENG'>{this.props.engName}</p>
          <i>
            {this.state.isActive ? (
              <BsHeartFill
                onClick={this.toggleActive}
                className='likeHeart active'
                size='2em'
              />
            ) : (
              <BsHeart
                className='likeHeart'
                onClick={this.toggleActive}
                size='2em'
              />
            )}
          </i>
        </div>
        <p className='explainCoffee'>{this.props.summary}</p>
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
