import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox';
import './FormBox.scss';

class FormBox extends Component {
  handleBtnOnclick = () => {
    alert('유효한 ID와 비밀번호가 아닙니다!');
  };

  render() {
    const { handleIdInput, handlePwInput, isIdValid, isPwValid, isVisible } =
      this.props;

    return (
      <form className='FormBox'>
        <InputBox
          validity={isIdValid}
          type='text'
          placeHolder='전화번호, 사용자 이름 또는 이메일'
          handleInput={handleIdInput}
        />
        <InputBox
          validity={isPwValid}
          isVisible={isVisible}
          placeHolder='비밀번호'
          handleInput={handlePwInput}
          isPw={true}
        />
        <Link to='/List-siwonkim'>
          <button
            className={isIdValid && isPwValid ? 'btn btnOn' : 'btn'}
            disabled={!(isIdValid && isPwValid)}
          >
            로그인
          </button>
        </Link>
      </form>
    );
  }
}

export default FormBox;
