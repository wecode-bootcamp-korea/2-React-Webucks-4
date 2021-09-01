import React, { Component } from 'react';
// import TopsNav from '../../components/TopsNav';
import '../../../styles/reset.scss';
import './Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

    this.changeHeartBtnColor = this.changeHeartBtnColor.bind(this);
    this.handleReviewChange = this.handleReviewChange.bind(this);
  }
  changeHeartBtnColor(event) {
    this.setState(prevState => {
      return { isToggleOn: !prevState.isToggleOn };
    });
  }

  handleReviewChange(event) {
    this.setState({
      newReply: event.target.value,
    });
    console.log(this.state);
  }

  pressEnter(event) {
    if (event.key === 'Enter' && this.state.newReply) {
    }
  }

  render() {
    return (
      <>
        <section className='Detail'>
          {/* main header TODO*/}
          {/* <TopsNav /> */}

          {/* sub header */}
          <header className='subHeader'>
            <h1>콜드 브루</h1>
            <ul className='subHeaderItems'>
              <li>
                <a href='#'>홈</a>
              </li>
              <li>
                <i className='fas fa-chevron-right'></i>
              </li>
              <li>
                <a href='#'>MENU</a>
              </li>
              <li>
                <i className='fas fa-chevron-right'></i>
              </li>
              <li>
                <a href='#'>음료</a>
              </li>
              <li>
                <i className='fas fa-chevron-right'></i>
              </li>
              <li>
                <a href='#'>에스프레소</a>
              </li>
              <li>
                <i className='fas fa-chevron-right'></i>
              </li>
              <li>
                <a href='#'>나이트로 바닐라 크림</a>
              </li>
            </ul>
          </header>

          {/* coffee info */}
          <article className='coffeeInfoContainer'>
            <section className='imgContainer'>
              <img
                alt='나이트로 바닐라 크림'
                src='../../images/coldbrew-1.jpg'
                className='coffeeInfoImage'
              />
            </section>

            <section className='infoContainer'>
              <header className='infoHeader'>
                <div>
                  <h2>나이트로 바닐라 크림</h2>
                  <p>Nitro Vanilla Cream</p>
                </div>
                <i
                  className={`fas fa-heart fa-lg ${
                    this.state.isToggleOn ? 'iconColorRed' : 'headerHeart'
                  }`}
                  onClick={this.changeHeartBtnColor}
                ></i>
              </header>

              <p className='coffeeDescripton'>
                부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에
                느껴보세요!
              </p>

              <div className='nutritionTitle'>
                <h3>제품 영양 정보</h3>
                <p>Tall(톨) / 355ml (12 fl oz)</p>
              </div>

              <div className='nutritionContainer'>
                <div className='nutritionLeft'>
                  <div className='nutritionItembox'>
                    <p>1회 제공량</p>
                    <p>345</p>
                  </div>
                  <div className='nutritionItembox'>
                    <p>포화지방 (g)</p>
                    <p>11</p>
                  </div>
                  <div className='nutritionItembox'>
                    <p>단백질 (g)</p>
                    <p>11</p>
                  </div>
                </div>

                <div className='nutritionRight'>
                  <div className='nutritionItembox'>
                    <p>나트륨 (mg)</p>
                    <p>150</p>
                  </div>
                  <div className='nutritionItembox'>
                    <p>당류 (g)</p>
                    <p>35</p>
                  </div>
                  <div className='nutritionItembox'>
                    <p>카페인 (mg)</p>
                    <p>75</p>
                  </div>
                </div>
              </div>

              <div className='allergyCause'>
                <p>알레르기 유발 요인 : 우유</p>
              </div>

              <div className='reviewContainer'>
                <h3>리뷰</h3>
                <ul className='items'>
                  <li className='item'>
                    <div className='contentBox'>
                      <p>
                        <b>작성자</b> <span>너무 맛있어요</span>
                      </p>
                    </div>
                    <div className='btnBox'>
                      <button>
                        <i className='fas fa-trash-alt'></i>
                      </button>
                      <button>
                        <i className='fas fa-heart fa-lg heart'></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
              <input
                className='reviewInput'
                type='text'
                placeholder='리뷰를 입력해주세요.'
                onChange={this.handleReviewChange}
                onKeyPress={this.presEnter}
              />
            </section>
          </article>
        </section>

        {/* footer */}

        <footer>
          <ul className='company'>
            <li>COMPANY</li>
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>

          <ul className='corporateSales'>
            <li>CORPORATE SALES</li>
            <li>단체 및 기업 구매 안내</li>
          </ul>

          <ul className='partnership'>
            <li>PARTNERSHIP</li>
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>

          <ul className='onlineCommnunity'>
            <li>ONLINE COMMUNITY</li>
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>

          <ul className='recruit'>
            <li>RECRUIT</li>
            <li>채용 소개</li>
            <li>채용 지원하기</li>
          </ul>

          <ul className='webucks'>
            <li>WEBUCKS</li>
          </ul>
        </footer>
      </>
    );
  }
}

export default Detail;
