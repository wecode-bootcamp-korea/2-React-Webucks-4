import React, { Component } from 'react';
import ReveiwList from '../component/ReviewList';
import HeartBtn from '../component/HeartBtn';
import './DetailCoffeeInfo.scss';

class DetailCoffeeFeature extends Component {
  render() {
    const { name, engName, desc, id, isLiked } = this.props.productData;
    const { changeHeartBtnColor } = this.props;
    const {
      servingSize,
      kcal,
      fat,
      protein,
      natrium,
      sugars,
      caffeine,
      allergen,
    } = this.props.productData.nutritionFacts;
    const descriptionText = desc.split('\n').map((line, i) => {
      return (
        <span key={i} className='coffeeDescription'>
          {line}
          <br />
        </span>
      );
    });

    return (
      <section className='DetailCoffeeInfo'>
        {/* header */}
        <header className='infoHeader'>
          <div>
            <h2 className='infoTitle'>{name}</h2>
            <p className='infoEngTitle'>{engName}</p>
          </div>
          <HeartBtn
            isLiked={isLiked}
            id={id}
            changeHeartBtnColor={changeHeartBtnColor}
          />
        </header>
        <p className='coffeeDescriptionBox'>{descriptionText}</p>

        {/* nutrition */}
        <table
          className='nutritionTable'
          id='keywords'
          cellSpacing='0'
          cellPadding='0'
        >
          <thead className='tableHead'>
            <tr className='nutritionTitleBox'>
              <th className='nutritionTitle' colSpan='2'>
                <span>제품 영양 정보</span>
              </th>
              <th className='servingSize' colSpan='2'>
                <span>{servingSize}</span>
              </th>
            </tr>
          </thead>
          <tbody className='tableBody'>
            <tr>
              <td className='nutritionFactLeft'>1회 제공량 (kcal)</td>
              <td className='numberOfNutrition centerBorder'>{kcal}</td>
              <td className='nutritionFactLeft'>나트륨 (mg)</td>
              <td className='numberOfNutrition'>{natrium}</td>
            </tr>
            <tr>
              <td className='nutritionFactLeft'>포화지방</td>
              <td className='numberOfNutrition centerBorder'>{fat}</td>
              <td className='nutritionFactLeft'>당류 (g)</td>
              <td className='numberOfNutrition'>{sugars}</td>
            </tr>
            <tr>
              <td className='nutritionFactLeft'>단백질 (g)</td>
              <td className='numberOfNutrition centerBorder'>{protein}</td>
              <td className='nutritionFactLeft'>카페인 (mg)</td>
              <td className='numberOfNutrition'>{caffeine}</td>
            </tr>
          </tbody>
        </table>
        {allergen && (
          <div className='allergyCause'>
            <p>{allergen}</p>
          </div>
        )}
        <ReveiwList />
      </section>
    );
  }
}

export default DetailCoffeeFeature;
