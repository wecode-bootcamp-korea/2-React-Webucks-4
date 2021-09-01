import React, { Component } from 'react';
import TopsNav  from '../TopsNav';
import './Detail.scss';


class Detail extends Component {
  render() {
    return (
      <div>
        <TopsNav />
        <article className="menubar">
          <h1>콜드 브루</h1>
          <p>홈 {'>'} MENU {'>'} 음료 {'>'} 콜드 브루 {'>'} 시그니처 더 블랙 콜드 브루</p>
        </article>
        <section className="menu">
          <img className="mainPic" alt="coldbrew" src="/images/시그니처더블랙콜드브루.jpg" />
          <section className="Detail">
            <div className="Title">
              <img className="heart" alt="heart" src="/images/heart.png" />
              <p className="name_ko">시그니처 더 블랙 콜드 브루</p>
              <p className="name_en">Signature The Bloack Cold Brew</p>
            </div>
            <div className="Text">
              <p> 콜드 브루 전용 원두를 차가운 물로 14시간 동안 추출하여 부드럽고 
                진한 풍미의 콜드브루를 딜리버리로 원하는 곳에서 편하게 즐겨보세요 
                (전용 리유저블 보틀 /500ml)</p>
            </div>
            <div className="Info">
              <span >제품 영양 정보</span>
              <span className="InfoDetail">Bottle(보틀 {'>'} / 500ml (17 fl oz)</span>
            </div>
            <div className="Ingre">
              <ul className="detailL">
                <li>1회 제공량 (kcal)</li>
                <li>포화지방 (g)</li>
                <li>1회 제공량</li>
              </ul>
              <ul className="detailR" id="line">
                <li>25</li>
                <li>0</li>
                <li>0</li>
              </ul>
              <ul className="detailL">
                <li>나트륨 (mg) </li>
                <li>당류 (g)</li>
                <li>카페인 (mg)</li>
              </ul>
              <ul className="detailR">
                <li>50</li>
                <li>0</li>
                <li>680</li>
              </ul>
            </div>
            <div className="Allergy">
              <p>알레르기 유발 요인 : 우유</p>
            </div>
            <div className="review">
              <p className="reviewTitle">리뷰</p>
              <div>
                <span className="reviewId">coffee_lover</span>
                <span className="reviewText">너무 맛있어요!</span>
              </div>
              <div>
                <span className="reviewId">CHOCO7</span>
                <span className="reviewText">너무 너무 맛있어요!</span>
              </div>
              <div>
                <span className="reviewId">coffee_lover</span>
                <span className="reviewText">너무 X 100 맛있어요!</span>
              </div>
            </div>
            <div className="reviewEnter">
              <p>리뷰를 입력해주세요.</p>
            </div>
          </section>
        </section>
        <footer>
          <div className="footer_in">
            <ul>
              <li className="f_title">COMPANY</li>
              <li>한눈에보기</li>
              <li>스타벅스 사명</li>
              <li>스타벅스 소개</li>
              <li>국내 뉴스룸</li>
              <li>세계의 스타벅스</li>
              <li>글로벌 뉴스룸</li>
            </ul>
            <ul>
              <li className="f_title">CORPORATE SALES</li>
              <li>단체 및 기업 구매 안내</li>
            </ul>
            <ul>
              <li className="f_title">PARTNERSHIP</li>
              <li>신규 입점 제의</li>
              <li>협력 고객사 등록 신청</li>
            </ul>
            <ul>
              <li className="f_title">ONLINE COMMUNITY</li>
              <li>페이스북</li>
              <li>트위터</li>
              <li>유튜브</li>
              <li>블로그</li>
              <li>인스타그램</li>
            </ul>
            <ul>
              <li className="f_title">RECRUIT</li>
              <li>채용 소개</li>
              <li>채용 지원하기</li>
            </ul>
            <ul className="f_title">
              WEBUCKS
            </ul>
          </div>
        </footer>  
      </div>
    );
  }
}

export default Detail;
