import React, { Component } from 'react';
import './TopNav.scss';

class NavBar extends Component {
  render() {
    return (
      <>
        <div className='tablet_gnb_wrap'>
          <h1 className='logo'>
            <a href='/list-wonkooklee'>Westabucks</a>
          </h1>
          <nav className='tablet_gnb_sep'>
            <ul>
              <li className='tablet_gnb01'>
                <a href='/login-wonkooklee' role='button'>
                  login
                </a>
              </li>
              <li className='tablet_gnb02'>
                <a href='http://localhost:3000' role='button'>
                  stores
                </a>
              </li>
              <li className='tablet_gnb03'>
                <a href='http://localhost:3000' role='button'>
                  menus
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id='mstopWrap'>
          <div id='gnb'>
            <div className='sub_gnb_wrap'>
              <div className='sub_gnb_wrap_inner'>
                <h1 className='logo'>
                  <a href='/list-wonkooklee'>Westabucks</a>
                </h1>
                <nav className='util_nav'>
                  <ul>
                    <li className='util_nav01 sign_in'>
                      <a href='/login-wonkooklee'>Sign In</a>
                    </li>
                    <li className='util_nav02'>
                      <a href='http://localhost:3000'>My Westarbucks</a>
                    </li>
                    <li className='util_nav03'>
                      <a href='http://localhost:3000'>
                        Customer Service &amp; Ideas
                      </a>
                    </li>
                    <li className='util_nav04'>
                      <a href='http://localhost:3000'>Find a Store</a>
                    </li>
                  </ul>
                </nav>
                <p className='btn_search'>
                  <a href='http://localhost:3000'>
                    <img
                      src='https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png'
                      alt='통합검색'
                    />
                  </a>
                </p>
              </div>
            </div>
            <nav className='sub_gnb_nav'>
              <div className='sub_gnb_nav_inner'>
                <ul>
                  <li className='gnb_nav01'>
                    <h2>
                      <a href='/list-wonkooklee'>COFFEE</a>
                    </h2>
                  </li>
                  <li className='gnb_nav02'>
                    <h2>
                      <a href='/list-wonkooklee'>MENU</a>
                    </h2>
                  </li>
                  <li className='gnb_nav03'>
                    <h2>
                      <a href='http://localhost:3000'>STORE</a>
                    </h2>
                  </li>
                  <li className='gnb_nav04'>
                    <h2>
                      <a href='http://localhost:3000'>RESPONSIBILITY</a>
                    </h2>
                  </li>
                  <li className='gnb_nav05'>
                    <h2>
                      <a href='http://localhost:3000'>WESTARBUCKS REWARDS</a>
                    </h2>
                  </li>
                  <li className='gnb_nav06'>
                    <h2>
                      <a href='http://localhost:3000'>WHAT'S NEW</a>
                    </h2>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
