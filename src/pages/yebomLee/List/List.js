import React, { Component } from 'react';
import './List.scss';
import Nav from '../../../components/Nav/Nav';
import { Link } from 'react-router-dom';
import { SiCoffeescript } from 'react-icons/si';

class List extends Component {
  render() {
    return (
      <div className='List'>
        <Nav />
        <main>
          <div className='menuBox'>
            <span className='coffeeType'>콜드 브루 커피</span>
            <i className='icon'>
              <SiCoffeescript />
            </i>
            <span className='extraInfo'>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>

          <ul className='coffeelist'>
            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/08/[9200000003661]_20210819094346176.jpg'
                  alt='커피1'
                />
              </div>
              시그니처 더 블랙 콜드 브루
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg'
                  alt='커피2'
                />
              </div>
              아이스크림 블렌딩 콜드 브루
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg'
                  alt='커피3'
                />
              </div>
              나이트로 바닐라 크림
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg'
                  alt='커피4'
                />
              </div>
              나이트로 콜드 브루
            </li>
          </ul>

          <ul className='coffeelist'>
            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg'
                  alt='커피5'
                />
              </div>
              돌체 콜드 브루
            </li>

            <li>
              <div className='donotgetbig'>
                <Link className='link' to='/detail-yebomlee'>
                  <img
                    className='coffeeimg'
                    src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg'
                    alt='커피6'
                  />
                </Link>
              </div>
              <Link className='link' to='/detail-yebomlee'>
                바닐라 크림 콜드 브루
              </Link>
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg'
                  alt='커피7'
                />
              </div>
              벨벳 다크 모카 나이트로
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg'
                  alt='커피8'
                />
              </div>
              제주 비자림 콜드 브루
            </li>
          </ul>

          <ul className='coffeelist'>
            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg'
                  alt='커피9'
                />
              </div>
              콜드 브루
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg'
                  alt='커피10'
                />
              </div>
              콜드 브루 몰트
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg'
                  alt='커피11'
                />
              </div>
              콜드 브루 오트 라떼
            </li>

            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg'
                  alt='커피12'
                />
              </div>
              콜드 브루 플로트
            </li>
          </ul>

          <ul className='coffeelist'>
            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg'
                  alt='커피13'
                />
              </div>
              프렌치 애플 타르트 나이트로
            </li>
          </ul>

          <div className='menuBox'>
            <span className='coffeeType'>브루드 커피</span>
            <i className='icon'>
              <SiCoffeescript />
            </i>
            <span className='extraInfo'>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </div>

          <ul className='coffeelist'>
            <li>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg'
                  alt='커피14'
                />
              </div>
              아이스 커피
            </li>

            <li className='todayCoffee'>
              <div className='donotgetbig'>
                <img
                  className='coffeeimg'
                  src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg'
                  alt='커피15'
                />
              </div>
              오늘의 커피
            </li>
          </ul>
        </main>
      </div>
    );
  }
}

export default List;
