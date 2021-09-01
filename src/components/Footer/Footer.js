import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav className='footer_nav'>
          <ul className='company'>
            <h4>COMPANY</h4>
            <li>
              <a href='http://localhost:3000'>한눈에 보기</a>
            </li>
            <li>
              <a href='http://localhost:3000'>위스타벅스 사명</a>
            </li>
            <li>
              <a href='http://localhost:3000'>위스타벅스 소개</a>
            </li>
            <li>
              <a href='http://localhost:3000'>국내 뉴스룸</a>
            </li>
            <li>
              <a href='http://localhost:3000'>세계의 위스타벅스</a>
            </li>
            <li>
              <a href='http://localhost:3000'>글로벌 뉴스룸</a>
            </li>
          </ul>
          <ul className='corporate_sales'>
            <h4>CORPORATE SALES</h4>
            <li>
              <a href='http://localhost:3000'>단체 및 기업 구매 안내</a>
            </li>
          </ul>
          <ul className='partnership'>
            <h4>PARTNERSHIP</h4>
            <li>
              <a href='http://localhost:3000'>신규 입점 제의</a>
            </li>
            <li>
              <a href='http://localhost:3000'>협력 고객사 등록 신청</a>
            </li>
          </ul>
          <ul className='online_community'>
            <h4>ONLINE COMMUNITY</h4>
            <li>
              <a href='http://localhost:3000'>페이스북</a>
            </li>
            <li>
              <a href='http://localhost:3000'>트위터</a>
            </li>
            <li>
              <a href='http://localhost:3000'>유튜브</a>
            </li>
            <li>
              <a href='http://localhost:3000'>블로그</a>
            </li>
            <li>
              <a href='http://localhost:3000'>인스타그램</a>
            </li>
          </ul>
          <ul className='recruit'>
            <h4>RECRUIT</h4>
            <li>
              <a href='http://localhost:3000'>채용 소개</a>
            </li>
            <li>
              <a href='http://localhost:3000'>채용 지원하기</a>
            </li>
          </ul>
          <div className='webucks'>
            <h4>
              <a href='http://localhost:3000ttps://wecode.co.kr/'>WEBUCKS</a>
            </h4>
          </div>
        </nav>
      </footer>
    );
  }
}

export default Footer;
