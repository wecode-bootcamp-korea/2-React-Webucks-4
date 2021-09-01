import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <section className='review_wrap'>
        <dl>
          <dt className='review_tit'>
            <h4>리뷰</h4>
          </dt>
          <dd className='review_container'>
            <ul id='RvTarget'>
              <li className='review_thread'>
                <span className='id'>coffee_lover</span>
                <span className='comment'>너무 맛있어요!</span>
                <div id='closeBtn'>X</div>
              </li>
              <li className='review_thread'>
                <span className='id'>CHOCO7</span>
                <span className='comment'>
                  오늘도 제주 비자림 콜드 브루를 마시러 제주도에 갑니다.
                </span>
                <div id='closeBtn'>X</div>
              </li>
              <li className='review_thread'>
                <span className='id'>legend_dev</span>
                <span className='comment'>
                  진짜 제주 비자림 콜드 브루는 전설이다. 진짜 제주 비자림 콜드
                  브루는 전설이다. 진짜 제주 비자림 콜드 브루는 전설이다.
                </span>
                <div id='closeBtn'>X</div>
              </li>
            </ul>
          </dd>
        </dl>
        <div id='validTag'>최소 열 자 이상 입력해주세요</div>
        <form action='submit'>
          <input
            id='review_field'
            type='text'
            placeholder='리뷰를 입력해주세요'
            spellcheck='false'
          />
          <label for='review_field' title='리뷰입력기'></label>
        </form>
      </section>
    );
  }
}

export default Comment;
