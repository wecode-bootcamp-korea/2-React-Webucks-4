import React, { Component } from 'react';
import './ProdDesc.scss';

export default class ProdDesc extends Component {
  render() {
    return (
      <div className='product_view_detail'>
        <div className='myAssignZone'>
          <h4>
            제주 비자림 콜드 브루
            <br />
            <span>Jeju Forest Cold Brew</span>
          </h4>
          <p className='t1'>
            [제주지역 한정음료] 제주 천년의 숲 비자림을 연상시키는
            <br />
            음료로 제주에서 유기농 말차로 만든
            <br />
            파우더와 Cold Brew를 활용한 음료.
          </p>
          <div className='like__btn'>
            <input type='checkbox' id='like' />
            <label className='btn-love' for='like' />
          </div>
        </div>
        <div className='m_view_slide'></div>

        <form action='post'>
          <fieldset>
            {/* NUTRITION FACT HEADER */}
            <legend className='hid'>제품 영양 정보</legend>
            <div className='product_view_info'>
              <div className='product_info_head'>
                <p className='tit'>제품 영양 정보</p>
                <div className='product_select_wrap2'>
                  <div className='selectTxt2' id='product_info01'>
                    Grande(그란데) / 473ml (16 fl oz)
                  </div>
                </div>
              </div>
              {/* NUTRITION FACT HEADER end */}

              {/* NUTRITION FACT CONTENT */}
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
                      <dd>8</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>단백질 (g)</dt>
                      <dd>10</dd>
                    </dl>
                  </li>
                </ul>
                <ul>
                  <li className='kcal'>
                    <dl>
                      <dt>나트륨 (mg)</dt>
                      <dd>115</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>당류 (g)</dt>
                      <dd>44</dd>
                    </dl>
                  </li>
                  <li className='kcal'>
                    <dl>
                      <dt>카페인 (mg)</dt>
                      <dd>105</dd>
                    </dl>
                  </li>
                </ul>
              </div>
              <div className='product_alergy'>
                <p className='alergy_warn'>알레르기 유발 요인 : 우유</p>
              </div>
            </div>
            {/* NUTRITION FACT CONTENT end*/}
          </fieldset>
        </form>
      </div>
    );
  }
}
