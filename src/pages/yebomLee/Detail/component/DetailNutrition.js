import React, { Component } from 'react';
import './DetailNutrition.scss';

class DetailNutrition extends Component {
  render() {
    return (
      <div>
        <div className='nutritionBox'>
          <span>제품 영양 정보</span>
          <span>Tall(톨) / 355ml (12 fl oz)</span>
        </div>
        <table>
          <tr>
            <td>1회 제공량 (kcal)</td>
            <td className='rightalign'>125</td>
            <td>나트륨 (mg)</td>
            <td className='rightalign'>58</td>
          </tr>
          <tr>
            <td>포화지방 (g)</td>
            <td className='rightalign'>6</td>
            <td>당류 (g)</td>
            <td className='rightalign'>11</td>
          </tr>
          <tr>
            <td>단백질 (g)</td>
            <td className='rightalign'>3</td>
            <td>카페인 (mg)</td>
            <td className='rightalign'>150</td>
          </tr>
        </table>
        <div className='allergyBox'>
          <p>알레르기 유발 요인: 우유</p>
        </div>
      </div>
    );
  }
}

export default DetailNutrition;
