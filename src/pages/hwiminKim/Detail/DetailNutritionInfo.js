import React, { Component } from 'react';
import './DetailNutritionInfo.scss';

class DetailNutritionInfo extends Component {
  render() {
    const servingSize = this.props.nutrition?.servingSize;
    const kcal = this.props.nutrition?.kcal;
    const fat = this.props.nutrition?.fat;
    const protein = this.props.nutrition?.protein;
    const natrium = this.props.nutrition?.natrium;
    const sugar = this.props.nutrition?.sugar;
    const caffeine = this.props.nutrition?.caffine;
    const allergen = this.props.nutrition?.allegen;
    return (
      <>
        <div className='nutritionTitleBox'>
          <h3 className='nutritionTitle'>제품 영양 정보</h3>
          <p className='nutiritionServingSize'>{servingSize}</p>
        </div>

        <div className='nutritionContainer'>
          <div className='nutritionLeft'>
            <div className='nutritionItembox'>
              <p>1회 제공량</p>
              <p>{kcal}</p>
            </div>
            <div className='nutritionItembox'>
              <p>포화지방 (g)</p>
              <p>{kcal}</p>
            </div>
            <div className='nutritionItembox'>
              <p>단백질 (g)</p>
              <p>{protein}</p>
            </div>
          </div>

          <div className='nutritionRight'>
            <div className='nutritionItembox'>
              <p>나트륨 (mg)</p>
              <p>{natrium}</p>
            </div>
            <div className='nutritionItembox'>
              <p>당류 (g)</p>
              <p>{sugar}</p>
            </div>
            <div className='nutritionItembox'>
              <p>카페인 (mg)</p>
              <p>{caffeine}</p>
            </div>
          </div>
        </div>
        {allergen ? (
          <div className='allergyCause'>
            <p>{allergen}</p>
          </div>
        ) : (
          <div className='emptyAllergyCause'></div>
        )}
      </>
    );
  }
}

export default DetailNutritionInfo;
