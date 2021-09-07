import React, { Component } from 'react';
import './Detail.scss';
import Nav from '../components/Nav';
import DetailTitle from './component/DetailTitle';
import DetailCoffeeImg from './component/DetailCoffeeImg';
import DetailNutrition from './component/DetailNutrition';
import DetailReview from './component/DetailReview';
import DetailFooter from './component/DetailFooter';
import DetailCoffeeInfo from './component/DetailCoffeeInfo';

class Detail extends Component {
  render() {
    return (
      <div className='Detail'>
        <Nav />
        <main>
          <DetailTitle />
          <article>
            <DetailCoffeeImg />
            <div className='mainContainer'>
              <DetailCoffeeInfo />
              <DetailNutrition />
              <DetailReview />
            </div>
          </article>
        </main>
        <footer>
          <DetailFooter />
        </footer>
      </div>
    );
  }
}

export default Detail;
