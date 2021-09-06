import React, { Component } from 'react';
import './MainImgFrame.scss';
import { zoomImage } from './zoomInteraction';

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
            <img src={this.props.imgUrl} alt={this.props.name} />
          </div>
          <div className='zoomWindowContainer'>
            <div
              id='zoomWindow'
              className='zoomWindow'
              style={{ backgroundImage: `url(${this.props.imgUrl})` }}
            ></div>
          </div>
        </div>
        <div className='product_thum_wrap'></div>
      </div>
    );
  }
}

export default MainImgFrame;
