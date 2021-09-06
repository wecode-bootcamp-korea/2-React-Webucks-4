import React, { Component } from 'react';
import { DETAILS } from './PRODUCT_INFO';
import AlergenDesc from './AlergenDesc';
import './ProdDesc.scss';

const Prod = DETAILS[7];
const NutFact = DETAILS[7].nutritionFacts;

class ProdDesc extends Component {
  render() {
    return (
      <div className='product_view_detail'>
        <div className='myAssignZone'>
          <h4>
            {Prod.name}
            <br />
            <span>{Prod.engName}</span>
          </h4>
          <p className='t1'>
            {Prod.summary.split('\n').map((line, i) => {
              return (
                <span key={i}>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
          <div className='like__btn'>
            <input type='checkbox' id='like' />
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
                    {NutFact.servingSize}
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
                      <dd>{NutFact.fat}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>단백질 (g)</dt>
                      <dd>{NutFact.protein}</dd>
                    </dl>
                  </li>
                </ul>
                <ul>
                  <li className='kcal'>
                    <dl>
                      <dt>나트륨 (mg)</dt>
                      <dd>{NutFact.natrium}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>당류 (g)</dt>
                      <dd>{NutFact.sugars}</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>카페인 (mg)</dt>
                      <dd>{NutFact.caffeine}</dd>
                    </dl>
                  </li>
                </ul>
              </div>
              {NutFact.allergen ? (
                <AlergenDesc allergen={NutFact.allergen} />
              ) : null}
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProdDesc;
