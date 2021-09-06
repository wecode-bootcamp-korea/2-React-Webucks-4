import React, { Component } from 'react';
import AlergenDesc from './AlergenDesc';
import './ProdDesc.scss';

class ProdDesc extends Component {
  render() {
    const { name, engName, summary, nutritionFacts, hasUserLiked } = this.props;
    return (
      <div className='product_view_detail'>
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
          <div className='like__btn'>
            <input type='checkbox' id='like' onClick={() => hasUserLiked()} />
            <label className='btn-love' htmlFor='like' />
          </div>
        </div>
        <div className='m_view_slide'></div>

        <form action='post'>
          <fieldset>
            <legend className='hid'>제품 영양 정보</legend>
            <div className='product_view_info'>
              <div className='product_info_head'>
                <p className='tit'>제품 영양 정보</p>
                <div className='product_select_wrap2'>
                  <div className='selectTxt2' id='product_info01'>
                    {nutritionFacts?.servingSize}
                  </div>
                </div>
              </div>

              <div className='product_info_content clearfix'>
                <ul>
                  <li className='kcal'>
                    <dl>
                      <dt>1회 제공량 (kcal)</dt>
                      <dd>340</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>포화지방 (g)</dt>
                      <dd>{nutritionFacts?.fat}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>단백질 (g)</dt>
                      <dd>{nutritionFacts?.protein}</dd>
                    </dl>
                  </li>
                </ul>
                <ul>
                  <li className='kcal'>
                    <dl>
                      <dt>나트륨 (mg)</dt>
                      <dd>{nutritionFacts?.natrium}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>당류 (g)</dt>
                      <dd>{nutritionFacts?.sugars}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
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
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProdDesc;
