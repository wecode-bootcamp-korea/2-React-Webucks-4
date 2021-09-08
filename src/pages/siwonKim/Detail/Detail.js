import React, { Component } from 'react';
import TopNav from '../TopNav';
import ProductTitle from './ProductTitle';
import DetailInfo from './DetailInfo';
import Allergen from './Allergen';
import Review from './Review';
import Footer from './Footer';
import '../Detail/Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/PRODUCT_INFO.json', {
      method: 'GET',
    }) //
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.myData,
        });
      });
  }

  render() {
    let data = this.state.products.find(
      item => item.id === this.props.match.params.id * 1
    );
    // fetch전 렌더오류 예외처리
    if (!data)
      data = {
        category: '',
        name: '',
        imgUrl: '',
        nutritionFacts: { allergen: '' },
      };

    return (
      <div className='Detail'>
        <TopNav />
        <main className='mainContent'>
          <ProductTitle category={data.category} name={data.name} />
          <div className='bodyWrap'>
            <img src={data.imgUrl} alt={data.name} className='productImg' />
            <section className='productInfo'>
              <DetailInfo data={data} />
              {data.nutritionFacts.allergen ? (
                <Allergen allergen={data.nutritionFacts.allergen} />
              ) : null}
              <Review />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Detail;
