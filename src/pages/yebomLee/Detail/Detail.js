import React, { Component } from 'react';
import './Detail.scss';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      newReveiwValue: '',
      reveiwValue: [{ text: '' }],
    };
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };
  // 입력한 댓글 불러오기
  getReveiwValue = e => {
    this.setState({
      newReveiwValue: e.target.value,
    });
  };
  //댓글 저장 함수
  addReview = () => {
    this.state.reveiwValue.push({ text: this.state.newReveiwValue });

    this.setState({
      newReveiwValue: '',
      reveiwValue: this.state.reveiwValue,
    });
  };
  // 엔터 기능 함수
  handleKeyPress = e => {
    if (e.key === 'Enter' && this.state.newReveiwValue) {
      this.addReview();

      e.target.value = '';
      e.preventDefault();
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className='Detail'>
        <Nav />
        <main>
          <section>
            <h1>콜드 브루</h1>
            <div className='linktap'>
              <Link to='/login-yebomlee'> 홈 </Link> {'>'}
              <a href='#'> MENU </a> {'>'}
              <Link to='/list-yebomlee'> 음료 </Link> {'>'}
              <a href='#'> 콜드브루 </a> {'>'}
              <a href='#'> 바닐라 크림 콜드 브루</a>
            </div>
          </section>
          <article>
            <img
              className='coffeeImg'
              alt='바닐라 크림 콜드 브루'
              src='https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000000487]_20210430112319174.jpg'
            />
            <div className='mainContainer'>
              <div className='menuNameBox'>
                <p className='korean'>바닐라 크림 콜드 브루</p>
                <p className='english'>Vanilla Cream Cold Brew</p>
                <i>
                  {this.state.isActive ? (
                    <BsHeartFill
                      onClick={this.toggleActive}
                      className='fillHeart'
                      size='2em'
                    />
                  ) : (
                    <BsHeart
                      className='likeHeart'
                      onClick={this.toggleActive}
                      size='2em'
                    />
                  )}
                </i>
              </div>
              <p className='explainCoffee'>
                콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드 브루를
                새롭게 즐길 수 있는 음료입니다.
              </p>
              <div className='nutritionBox'>
                <span>제품 영양 정보</span>
                <span>Tall(톨) / 355ml (12 fl oz)</span>
              </div>
              <table>
                <tr>
                  <td>1회 제공량 (kcal)</td>
                  <td className='rightalign'>125</td>
                  <td>나트륨 (mg)</td>
                  <td className='rightalign'>58</td>
                </tr>
                <tr>
                  <td>포화지방 (g)</td>
                  <td className='rightalign'>6</td>
                  <td>당류 (g)</td>
                  <td className='rightalign'>11</td>
                </tr>
                <tr>
                  <td>단백질 (g)</td>
                  <td className='rightalign'>3</td>
                  <td>카페인 (mg)</td>
                  <td className='rightalign'>150</td>
                </tr>
              </table>
              <div className='allergyBox'>
                <p>알레르기 유발 요인: 우유</p>
              </div>
              <div className='reviewBox'>
                <p className='review'>리뷰</p>
                <div className='userReview1'>
                  <span>coffee_lover </span>
                  <span>너무 맛있어요!</span>
                </div>
                <div className='userReview2'>
                  <span>CHOCO7 </span>
                  <span>오늘도 마시러 갑니다.</span>
                </div>
                <div className='userReview3'>
                  <span>legend_dev </span>
                  <span>진짜 전설이다. 진짜 전설이다.</span>
                </div>
                <ul className='userReview4'>
                  {this.state.reveiwValue.map(el => (
                    <li>{el.text}</li>
                  ))}
                </ul>
                <form>
                  <input
                    onKeyDown={this.handleKeyPress}
                    onChange={this.getReveiwValue}
                    // value={this.state.newReveiwValue}
                    type='text'
                    placeholder='리뷰를 입력해주세요.'
                  />
                </form>
              </div>
            </div>
          </article>
        </main>
        <footer>
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
        </footer>
      </div>
    );
  }
}

export default Detail;
