import React, { Component } from 'react';
import { DETAILS } from './PRODUCT_INFO';
import './MainImgFrame.scss';

const Prod = DETAILS[2];

class MainImgFrame extends Component {
  render() {
    return (
      <div className='product_view_pic'>
        <div className='product_big_pic'>
          <div className='zoomFrame'>
            <div className='zoomLens'></div>
            <img src={Prod.imgUrl} alt={Prod.name} />
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
