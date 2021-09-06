import React from 'react';
import { Link } from 'react-router-dom';

class CoffeeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnColor: false,
    };
  }

  btnChangeHandler = () => {
    this.state.btnColor
      ? this.setState({ btnColor: false })
      : this.setState({ btnColor: true });
  };

  render() {
    return (
      <>
        <div id='menu'>
          <div className='fit'>
            <a href='/Detail-wonyoungKim'>
              <img src={this.props.img} alt='coffee' Link='Detail' />
            </a>
          </div>
          <div className='Name'>
            {this.props.Name}
            <button onClick={this.btnChangeHandler}>
              {this.state.btnColor ? (
                <img src='/images/heartRed.png' alt='heartRed' />
              ) : (
                <img src='/images/heart.png' alt='heart' />
              )}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default CoffeeCard;
