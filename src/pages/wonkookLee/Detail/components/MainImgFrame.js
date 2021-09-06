import React, { Component } from 'react';
import { DETAILS } from './PRODUCT_INFO';
import './MainImgFrame.scss';
import { zoomImage } from './zoomInteraction';

const Prod = DETAILS[7];

class MainImgFrame extends Component {
  componentDidMount() {
    zoomImage();
  }

  render() {
    return (
      <div className='product_view_pic'>
        <div className='product_big_pic'>
          <div id='zoomFrame' className='zoomFrame'>
            <div id='zoomLens' className='zoomLens'></div>
            <img src={Prod.imgUrl} alt={Prod.name} />
          </div>
          <div className='zoomWindowContainer'>
            <div id='zoomWindow' className='zoomWindow'></div>
          </div>
        </div>
        <div className='product_thum_wrap'></div>
      </div>
    );
  }
}

export default MainImgFrame;
