import React, { Component } from 'react';
import './MainImgFrame.scss';

class MainImgFrame extends Component {
  render() {
    return (
      <div className='product_view_pic'>
        <div className='product_big_pic'>
          <div className='zoomFrame'>
            <div className='zoomLens'></div>
            <img
              src='https://image.istarbucks.co.kr/upload/store/skuimg/2020/09/[9200000002672]_20200921171223958.jpg'
              alt='커피사진'
            />
          </div>
          <div className='zoomWindowContainer'>
            <div className='zoomWindow'></div>
          </div>
        </div>
        <div className='product_thum_wrap'></div>
      </div>
    );
  }
}

export default MainImgFrame;
