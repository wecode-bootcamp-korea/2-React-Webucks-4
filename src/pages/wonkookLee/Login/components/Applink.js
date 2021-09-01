import React, { Component } from 'react';
import './Applink.scss';

class Applink extends Component {
  render() {
    return (
      <div className='applink'>
        <div className='app__mention'>앱을 다운로드하세요.</div>
        <div className='link__btns'>
          <span className='link__btn appstore__btn'>
            <a href='http://localhost:3000/'>appstore</a>
          </span>
          <span className='link__btn googleplay__btn'>
            <a href='http://localhost:3000/'>playstore</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Applink;
