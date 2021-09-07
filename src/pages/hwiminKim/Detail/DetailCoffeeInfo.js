import React, { Component } from 'react';
import ReveiwList from '../component/ReviewList';
import HeartIcon from '../component/HeartIcon';
import './DetailCoffeeInfo.scss';

class DetailCoffeeFeature extends Component {
  render() {
    // const isHeartToggleOn = this.state.isHeartToggleOn;
    const description = this.props.description;
    const nutrition = this.props.nutrition;
    const summary = this.props.description?.desc.split('\n').map((line, i) => {
      return (
        <span key={i} className='coffeeDescription'>
          {line}
          <br />
        </span>
      );
    });
    return (
      <section className='infoContainer'>
        {/* header */}
        <header className='infoHeader'>
          <div>
            <h2 className='infoTitle'>{description?.name}</h2>
            <p>{description?.engName}</p>
          </div>
          <HeartIcon />
        </header>
        <p className='coffeeDescriptionBox'>{summary}</p>

        {/* nutrition */}
        <div className='nutritionTitleBox'>
          <h3 className='nutritionTitle'>제품 영양 정보</h3>
          <p className='nutiritionServingSize'>{nutrition?.servingSize}</p>
        </div>

        <div className='nutritionContainer'>
          <div className='nutritionLeft'>
            <div className='nutritionItembox'>
              <p>1회 제공량</p>
              <p>{nutrition?.kcal}</p>
            </div>
            <div className='nutritionItembox'>
              <p>포화지방 (g)</p>
              <p>{nutrition?.kcal}</p>
            </div>
            <div className='nutritionItembox'>
              <p>단백질 (g)</p>
              <p>{nutrition?.protein}</p>
            </div>
          </div>

          <div className='nutritionRight'>
            <div className='nutritionItembox'>
              <p>나트륨 (mg)</p>
              <p>{nutrition?.natrium}</p>
            </div>
            <div className='nutritionItembox'>
              <p>당류 (g)</p>
              <p>{nutrition?.sugar}</p>
            </div>
            <div className='nutritionItembox'>
              <p>카페인 (mg)</p>
              <p>{nutrition?.caffeine}</p>
            </div>
          </div>
        </div>
        {nutrition?.allergen ? (
          <div className='allergyCause'>
            <p>{nutrition?.allergen}</p>
          </div>
        ) : (
          <div className='emptyAllergyCause'></div>
        )}
        <ReveiwList />
      </section>
    );
  }
}

export default DetailCoffeeFeature;
