import React, { Component } from 'react';
import LikeBtn from './LikeBtn';

class ProductList extends Component {
  render() {
    return (
      <div className='product_list'>
        <dl>
          {/* 콜드 브루 커피 */}
          <dt>
            <a href='http://localhost:3000'>콜드 브루 커피</a>
            <i>
              <img
                src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
                alt='커피'
              />
            </i>
            <span className='summary'>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </dt>
          <dd>
            <ul className='product_cold_brew clearfix'>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/06/[9200000003643]_20210623101238720.jpg'
                        alt='아이스크림 블렌딩 콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>아이스크림 블렌딩 콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745467.jpg'
                        alt='니이트로 바닐라 크림'
                      />
                    </a>
                  </dt>
                  <dd>니이트로 바닐라 크림</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000479]_20210426091843897.jpg'
                        alt='나이트로 콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>나이트로 콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002081]_20210415133656839.jpg'
                        alt='돌체 콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>돌체 콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319040.jpg'
                        alt='바닐라 크림 콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>바닐라 크림 콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003509]_20210322093452399.jpg'
                        alt='벨벳 다크 모카 나이트로'
                      />
                    </a>
                  </dt>
                  <dd>벨벳 다크 모카 나이트로</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000/detail.html' target='_self'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223898.jpg'
                        alt='제주 비자림 콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>제주 비자림 콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000038]_20210430113202458.jpg'
                        alt='콜드 브루'
                      />
                    </a>
                  </dt>
                  <dd>콜드 브루</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='	https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001636]_20210225093600536.jpg'
                        alt='콜드 브루 몰트'
                      />
                    </a>
                  </dt>
                  <dd>콜드 브루 몰트</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003285]_20210416154437069.jpg'
                        alt='콜드 브루 오트 라떼'
                      />
                    </a>
                  </dt>
                  <dd>콜드 브루 오트 라떼</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/02/[9200000001635]_20210225092236748.jpg'
                        alt='콜드 브루 폴로트'
                      />
                    </a>
                  </dt>
                  <dd>콜드 브루 폴로트</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/03/[9200000003507]_20210322093414289.jpg'
                        alt='프렌치 애플 타르트 나이트로'
                      />
                    </a>
                  </dt>
                  <dd>프렌치 애플 타르트 나이트로</dd>
                </dl>
              </li>
            </ul>
          </dd>
          {/* 콜드 브루 커피 end */}
          {/* 브루드 커피 */}
          <dt>
            <a href='http://localhost:3000'>브루드 커피</a>
            <i>
              <img
                src='https://image.istarbucks.co.kr/common/img/menu/logo_decaf.png'
                alt='커피'
              />
            </i>
            <span className='summary'>
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </span>
          </dt>
          <dd>
            <ul className='product_brood clearfix'>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[106509]_20210430111852870.jpg'
                        alt='아이스 커피'
                      />
                    </a>
                  </dt>
                  <dd>아이스 커피</dd>
                </dl>
              </li>
              <li className='menuDataSet'>
                <dl>
                  <dt>
                    <LikeBtn />
                    <a href='http://localhost:3000'>
                      <img
                        src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[2]_20210430111934117.jpg'
                        alt='오늘의 커피'
                      />
                    </a>
                  </dt>
                  <dd>오늘의 커피</dd>
                </dl>
              </li>
            </ul>
          </dd>
          {/* 브루드 커피 end */}
        </dl>
      </div>
    );
  }
}

export default ProductList;
