import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IdInput from './IdInput';
import PwInput from './PwInput';
import './FormBox.scss';

class FormBox extends Component {
  handleBtnOnclick = () => {
    alert('유효한 ID와 비밀번호가 아닙니다!');
  };

  render() {
    const { handleIdInput, handlePwInput, isIdValid, isPwValid, seePw } =
      this.props;

    return (
      <form className='FormBox'>
        <IdInput handleIdInput={handleIdInput} isIdValid={isIdValid} />
        <PwInput
          handlePwInput={handlePwInput}
          isIdValid={isIdValid}
          isPwValid={isPwValid}
          seePw={seePw}
        />
        {isIdValid && isPwValid ? (
          <Link to='/List-siwonkim' className='btnOn' type='button'>
            로그인
          </Link>
        ) : (
          <button className='btn' type='button' onClick={this.handleBtnOnclick}>
            로그인
          </button>
        )}
      </form>
    );
  }
}

export default FormBox;
