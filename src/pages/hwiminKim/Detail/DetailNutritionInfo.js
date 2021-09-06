import React, { Component } from 'react';
import './DetailNutritionInfo.scss';

class DetailNutritionInfo extends Component {
  render() {
    return (
      <>
        <div className='nutritionTitleBox'>
          <h3 className='nutritionTitle'>제품 영양 정보</h3>
          <p className='nutiritionServingSize'>
            {this.props.nutrition?.servingSize}
          </p>
        </div>

        <div className='nutritionContainer'>
          <div className='nutritionLeft'>
            <div className='nutritionItembox'>
              <p>1회 제공량</p>
              <p>{this.props.nutrition?.kcal}</p>
            </div>
            <div className='nutritionItembox'>
              <p>포화지방 (g)</p>
              <p>{this.props.nutrition?.fat}</p>
            </div>
            <div className='nutritionItembox'>
              <p>단백질 (g)</p>
              <p>{this.props.nutrition?.protein}</p>
            </div>
          </div>

          <div className='nutritionRight'>
            <div className='nutritionItembox'>
              <p>나트륨 (mg)</p>
              <p>{this.props.nutrition?.natrium}</p>
            </div>
            <div className='nutritionItembox'>
              <p>당류 (g)</p>
              <p>{this.props.nutrition?.sugar}</p>
            </div>
            <div className='nutritionItembox'>
              <p>카페인 (mg)</p>
              <p>{this.props.nutrition?.caffeine}</p>
            </div>
          </div>
        </div>
        {this.props.nutrition?.allergen ? (
          <div className='allergyCause'>
            <p>{this.props.nutrition?.allergen}</p>
          </div>
        ) : (
          <div style={{ height: '90px' }}></div>
        )}
      </>
    );
  }
}

export default DetailNutritionInfo;
