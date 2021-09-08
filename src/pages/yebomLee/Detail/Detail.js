import React, { Component } from 'react';
import Nav from '../components/Nav';
import DetailTitle from './component/DetailTitle';
import DetailCoffeeImg from './component/DetailCoffeeImg';
import DetailCoffeeInfo from './component/DetailCoffeeInfo';
import DetailReview from './component/DetailReview';
import Footer from '../components/Footer';
import DETAILS from './component/PRODUCT_INFO';
import './Detail.scss';

class Detail extends Component {
  render() {
    const { category, name, engName, summary, imgUrl, nutritionFacts } =
      DETAILS[5];
    return (
      <div className='Detail'>
        <Nav />
        <main>
          <DetailTitle category={category} name={name} />
          <article>
            <DetailCoffeeImg imgUrl={imgUrl} name={name} />
            <div className='coffeeInfoContainer'>
              <DetailCoffeeInfo
                name={name}
                engName={engName}
                summary={summary}
                nutritionFacts={nutritionFacts}
              />
              <DetailReview />
            </div>
          </article>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Detail;
