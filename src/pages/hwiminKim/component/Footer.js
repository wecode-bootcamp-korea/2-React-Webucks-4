import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <ul className='footerItemList'>
          <li className='footerItem'>COMPANY</li>
          <li className='footerItem'>한눈에 보기</li>
          <li className='footerItem'>스타벅스 사명</li>
          <li className='footerItem'>스타벅스 소개</li>
          <li className='footerItem'>국내 뉴스룸</li>
          <li className='footerItem'>세계의 스타벅스</li>
          <li className='footerItem'>글로벌 뉴스룸</li>
        </ul>

        <ul className='footerItemList'>
          <li className='footerItem'>CORPORATE SALES</li>
          <li className='footerItem'>단체 및 기업 구매 안내</li>
        </ul>

        <ul className='footerItemList'>
          <li className='footerItem'>PARTNERSHIP</li>
          <li className='footerItem'>신규 입점 제의</li>
          <li className='footerItem'>협력 고객사 등록 신청</li>
        </ul>

        <ul className='footerItemList'>
          <li className='footerItem'>ONLINE COMMUNITY</li>
          <li className='footerItem'>페이스북</li>
          <li className='footerItem'>트위터</li>
          <li className='footerItem'>유튜브</li>
          <li className='footerItem'>블로그</li>
          <li className='footerItem'>인스타그램</li>
        </ul>

        <ul className='footerItemList'>
          <li className='footerItem'>RECRUIT</li>
          <li className='footerItem'>채용 소개</li>
          <li className='footerItem'>채용 지원하기</li>
        </ul>

        <ul className='footerItemList'>
          <li className='footerItem'>WEBUCKS</li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
