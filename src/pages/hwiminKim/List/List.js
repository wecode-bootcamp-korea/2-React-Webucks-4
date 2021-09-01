import React, { Component } from 'react';

// import TopsNav from '../../components/TopsNav';
// import CoffeeCard from '../../components/CoffeeCard';
import '../../../styles/reset.scss';
import './List.scss';
// import '../../styles/common.scss';

const coldbrewProducts = [
  {
    id: '1',
    title: '아이스크림 블렌딩 콜드 브루',
    imgURL: '../../images/coldbrew-0.jpg',
  },
  {
    id: '2',
    title: '나이트로 바닐라 크림',
    imgURL: '../../images/coldbrew-1.jpg',
  },
  {
    id: '3',
    title: '나이트로 콜드 브루',
    imgURL: '../../images/coldbrew-2.jpg',
  },
  {
    id: '4',
    title: '돌체 콜드 브루',
    imgURL: '../../images/coldbrew-3.jpg',
  },
  {
    id: '5',
    title: '바닐라 크림 콜드 브루',
    imgURL: '../../images/coldbrew-4.jpg',
  },
  {
    id: '6',
    title: '벨벳 다크 모카 나이트로',
    imgURL: '../../images/coldbrew-5.jpg',
  },
  {
    id: '7',
    title: '제주 비자림 콜드 브루',
    imgURL: '../../images/coldbrew-6.jpg',
  },
  {
    id: '8',
    title: '콜드 브루',
    imgURL: '../../images/coldbrew-7.jpg',
  },
  {
    id: '9',
    title: '콜드 브루 몰트',
    imgURL: '../../images/coldbrew-8.jpg',
  },
  {
    id: '10',
    title: '콜드 브루 오트 라떼',
    imgURL: '../../images/coldbrew-9.jpg',
  },
];

const brewProducts = [
  {
    id: '1',
    title: '아이스커피',
    imgURL: '../../images/brewed-0.jpg',
  },
  {
    id: '2',
    title: '오늘의 커피',
    imgURL: '../../images/brewed-1.jpg',
  },
];

class List extends Component {
  render() {
    return (
      <section className='List'>
        {/*main header*/}
        {/* <TopsNav /> */}

        {/*sub header*/}
        <header className='subHeader'>
          <h4>콜드 브루 커피</h4>
          <div className='addShot'>
            <img alt='decaf logo' src='../../images/logo_decaf.png' />
            <p>디카페인 에스프레소 샷 추가 가능</p>
          </div>
        </header>

        {/*coldbrew list TODO*/}
        {/* <section className='coldbrewList'>
          <ul className='coldbrewListItems'>
            {coldbrewProducts.map(coldbrewProduct => {
              return (
                <CoffeeCard
                  title={coldbrewProduct.title}
                  imageURL={coldbrewProduct.imgURL}
                />
              );
            })}
          </ul>
        </section> */}

        {/* sub header */}
        <header className='subHeader'>
          <h4>브루드 커피</h4>
          <div className='addShot'>
            <img alt='decaf logo' src='../../images/logo_decaf.png' />
            <p>디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</p>
          </div>
        </header>

        {/* brewed list */}
        <section className='brewedList'>
          <ul className='brewedListItems'>
            {/* TODO */}
            {/* {brewProducts.map(brewProduct => {
              return (
                <CoffeeCard
                  title={brewProduct.title}
                  imageURL={brewProduct.imgURL}
                />
              );
            })} */}
          </ul>
        </section>
      </section>
    );
  }
}

export default List;
