import React from 'react';
import './HeartLike.scss';

class HeartLike extends React.Component {
  constructor() {
    super();
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
        <button onClick={this.btnChangeHandler}>
          {this.state.btnColor ? (
            <img src='/images/heartRed.png' alt='heartRed' />
          ) : (
            <img src='/images/heart.png' alt='heart' />
          )}
        </button>
      </>
    );
  }
}

export default HeartLike;
