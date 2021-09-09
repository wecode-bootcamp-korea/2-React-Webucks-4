import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

class NavBar extends Component {
  render() {
    return (
      <>
        <div className='tabletGnbWrap'>
          <h1 className='logo'>
            <Link to='/list-wonkooklee'>Westabucks</Link>
          </h1>
          <nav className='tabletGnbSep'>
            <ul>
              <li>
                <Link to='/login-wonkooklee' role='button'>
                  login
                </Link>
              </li>
              <li>
                <Link to='/list-wonkooklee' role='button'>
                  stores
                </Link>
              </li>
              <li>
                <Link to='/list-wonkooklee' role='button'>
                  menus
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id='gnb'>
          <div className='subGnbWrap'>
            <div className='subGnbWrapInner'>
              <h1 className='logo'>
                <Link to='/list-wonkooklee'>Westabucks</Link>
              </h1>
              <nav className='util_nav'>
                <ul>
                  <li className='sign_in'>
                    <Link to='/login-wonkooklee'>Sign In</Link>
                  </li>
                  <li>
                    <Link to='/list-wonkooklee'>My Westarbucks</Link>
                  </li>
                  <li>
                    <Link to='/list-wonkooklee'>
                      Customer Service &amp; Ideas
                    </Link>
                  </li>
                  <li>
                    <Link to='/list-wonkooklee'>Find a Store</Link>
                  </li>
                </ul>
              </nav>
              <p className='btnSearch'>
                <Link to='/list-wonkooklee'>
                  <img
                    src='https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png'
                    alt='통합검색'
                  />
                </Link>
              </p>
            </div>
          </div>
          <nav className='subGnbNav'>
            <div className='subGnbNavInner'>
              <ul>
                <li className='gnbNav01'>
                  <h2>
                    <Link to='/list-wonkooklee'>COFFEE</Link>
                  </h2>
                </li>
                <li className='gnbNav02'>
                  <h2>
                    <Link to='/list-wonkooklee'>MENU</Link>
                  </h2>
                </li>
                <li className='gnbNav03'>
                  <h2>
                    <Link to='/list-wonkooklee'>STORE</Link>
                  </h2>
                </li>
                <li className='gnbNav04'>
                  <h2>
                    <Link to='/list-wonkooklee'>RESPONSIBILITY</Link>
                  </h2>
                </li>
                <li className='gnbNav05'>
                  <h2>
                    <Link to='/list-wonkooklee'>WESTARBUCKS REWARDS</Link>
                  </h2>
                </li>
                <li className='gnbNav06'>
                  <h2>
                    <Link to='/list-wonkooklee'>WHAT'S NEW</Link>
                  </h2>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default NavBar;
