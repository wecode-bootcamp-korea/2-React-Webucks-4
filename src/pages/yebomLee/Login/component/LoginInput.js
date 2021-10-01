import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class LoginInput extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
    };
  }

  getValue = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, this.isVaildInput);
  };

  // getPwValue = e => {
  //   this.setState({ pw: e.target.value });
  // };

  isVaildInput = () => {
    const { id, pw } = this.state;
    const isValid = id.includes('@') && pw.length >= 5;
    return isValid;
  };
  // isVaildId = e => {
  //   e.target.value.includes('@')
  //     ? this.setState({ isVaildId: true })
  //     : this.setState({ isVaildId: false });
  // };

  // isVaildPw = e => {
  //   e.target.value.length >= 5
  //     ? this.setState({ isVaildPw: true })
  //     : this.setState({ isVaildPw: false });
  // };

  goToList = e => {
    e.preventDefault();
    if (this.state.id.includes('@') && this.state.pw.length >= 5) {
      fetch('/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      })
        .then(res => {
          console.log(res);
          return res;
        })
        .then(
          result => console.log('결과: ', result),
          this.props.history.push('/list-yebomlee')
        );

      // }
    }
  };
  // http: //52.79.143.176:8000/users/login
  // http://52.79.143.176:8000/users/signup

  // goToList = () => {
  //   if (this.state.isVaildId && this.state.isVaildPw) {
  //     this.props.history.push('/list-yebomlee');
  //   }
  // };

  // handleKeyPress = e => {
  //   if (e.key !== 'Enter') {
  //     return;
  //   }
  //   e.preventDefault();
  //   this.goToList();
  // };

  render() {
    console.log(this.state);
    return (
      <form action='' onSubmit={this.goToList} className='LoginInput'>
        <input
          onChange={this.getValue}
          // onKeyPress={this.handleKeyPress}
          type='text'
          id='userId'
          name='id'
          placeholder='전화번호, 사용자 이름 또는 이메일'
        />
        <input
          onChange={this.getValue}
          // onKeyPress={this.handleKeyPress}
          type='password'
          id='userPassword'
          name='pw'
          placeholder='비밀번호'
        />
        <button
          className={this.isVaildInput() ? 'loginButton active' : 'loginButton'}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginInput);
