import React, { Component } from 'react';
import AlergenDesc from './AlergenDesc';
import './ProdDesc.scss';

class ProdDesc extends Component {
  render() {
    const { name, engName, summary, nutritionFacts, hasUserLiked } = this.props;
    return (
      <div className='ProductDesc'>
        <div className='myAssignZone'>
          <h4>
            {name}
            <br />
            <span>{engName}</span>
          </h4>
          <p className='t1'>
            {summary?.split('\n').map((line, i) => {
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
          <div className='likeBtn'>
            <input type='checkbox' id='like' onClick={() => hasUserLiked()} />
            <label className='btnLove' htmlFor='like' />
          </div>
        </div>

        <form action='post'>
          <fieldset>
            <legend className='hid'>제품 영양 정보</legend>
            <div className='productInfoHead'>
              <p className='tit'>제품 영양 정보</p>
              <div className='productSelectWrap'>
                <div className='selectTxt'>{nutritionFacts?.servingSize}</div>
              </div>
            </div>

            <div className='productInfoContent'>
              <ul>
                <li>
                  <dl>
                    <dt>1회 제공량 (kcal)</dt>
                    <dd>340</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>포화지방 (g)</dt>
                    <dd>{nutritionFacts?.fat}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>단백질 (g)</dt>
                    <dd>{nutritionFacts?.protein}</dd>
                  </dl>
                </li>
              </ul>
              <ul>
                <li>
                  <dl>
                    <dt>나트륨 (mg)</dt>
                    <dd>{nutritionFacts?.natrium}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>당류 (g)</dt>
                    <dd>{nutritionFacts?.sugars}</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>카페인 (mg)</dt>
                    <dd>{nutritionFacts?.caffeine}</dd>
                  </dl>
                </li>
              </ul>
            </div>
            {nutritionFacts?.allergen ? (
              <AlergenDesc allergen={nutritionFacts?.allergen} />
            ) : null}
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProdDesc;
