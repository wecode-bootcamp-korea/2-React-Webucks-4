import React from 'react';
import './DetailInfo.scss';

class DetailInfo extends React.Component {
  render() {
    return (
      <div>
        <div className='Text'>
          <p>
            콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 진한
            풍미의 콜드브루를 딜리버리로 원하는 곳에서 편하게 즐겨보세요 (전용
            리유저블 보틀 /500ml)
          </p>
        </div>
        <div className='Info'>
          <span>제품 영양 정보</span>
          <span className='InfoDetail'>
            Bottle(보틀 {'>'} / 500ml (17 fl oz)
          </span>
        </div>
        <div className='Ingre'>
          <ul className='detailL'>
            <li>1회 제공량 (kcal)</li>
            <li>포화지방 (g)</li>
            <li>1회 제공량</li>
          </ul>
          <ul className='detailR' id='line'>
            <li>25</li>
            <li>0</li>
            <li>0</li>
          </ul>
          <ul className='detailL'>
            <li>나트륨 (mg) </li>
            <li>당류 (g)</li>
            <li>카페인 (mg)</li>
          </ul>
          <ul className='detailR'>
            <li>50</li>
            <li>0</li>
            <li>680</li>
          </ul>
        </div>
        <div className='Allergy'>
          <p>알레르기 유발 요인 : 우유</p>
        </div>
      </div>
    );
  }
}

export default DetailInfo;
