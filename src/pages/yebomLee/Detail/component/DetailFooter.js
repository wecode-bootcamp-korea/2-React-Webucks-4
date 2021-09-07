import React, { Component } from 'react';
import './DetailFooter.scss';

class DetailFooter extends Component {
  render() {
    return (
      <div className='footer-box'>
        <ul>
          <li class='title'>COMPANY</li>
          <li>한눈에 보기</li>
          <li>스타벅스 사명</li>
          <li>스타벅스 소개</li>
          <li>국내 뉴스룸</li>
          <li>세계의 스타벅스</li>
          <li>글로벌 뉴스룸</li>
        </ul>
        <ul>
          <li class='title'>CORPORATE SALES</li>
          <li>단체 및 기업 구매 안내</li>
        </ul>
        <ul>
          <li class='title'>PARTNERSHIP</li>
          <li>신규 입점 제의</li>
          <li>협력 고객사 등록 신청</li>
        </ul>
        <ul>
          <li class='title'>ONLINE COMMUNITY</li>
          <li>페이스북</li>
          <li>트위터</li>
          <li>유튜브</li>
          <li>블로그</li>
          <li>인스타그램</li>
        </ul>
        <ul>
          <li class='title'>RECRUIT</li>
          <li>채용 소개</li>
          <li>채용 지원하기</li>
        </ul>
        <ul>
          <li class='title'>WEBUCKS</li>
        </ul>
      </div>
    );
  }
}
export default DetailFooter;
