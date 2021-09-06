import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className='Footer'>
        <div className='footerMenu'>
          <span>COMPANY</span>
          <span>한눈에 보기</span>
          <span>스타벅스 사명</span>
          <span>스타벅스 소개</span>
          <span>국내 뉴스룸</span>
          <span>세계의 스타벅스</span>
          <span>클로벌 뉴스룸</span>
        </div>
        <div className='footerMenu'>
          <span>CORPORATE SALES</span>
          <span>단체 및 기업 구매 안내</span>
        </div>
        <div className='footerMenu'>
          <span>PARTNERSHIP</span>
          <span>신규 입점 제의</span>
          <span>협력 고객사 등록 신청</span>
        </div>
        <div className='footerMenu'>
          <span>ONLINE COMMUNITY</span>
          <span>페이스북</span>
          <span>트위터</span>
          <span>유튜브</span>
          <span>블로그</span>
          <span>인스타그램</span>
        </div>
        <div className='footerMenu'>
          <span>RECRUIT</span>
          <span>채용 소개</span>
          <span>채용 지원하기</span>
        </div>
        <div className='footerMenu'>
          <span>WEBUCKS</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
