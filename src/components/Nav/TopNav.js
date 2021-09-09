import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TopNav.scss';

class NavBar extends Component {
  render() {
    return (
      <>
        <div className='tablet_gnb_wrap'>
          <h1 className='logo'>
            <Link to='/list-wonkooklee'>Westabucks</Link>
          </h1>
          <nav className='tablet_gnb_sep'>
            <ul>
              <li className='tablet_gnb01'>
                <Link to='/login-wonkooklee' role='button'>
                  login
                </Link>
              </li>
              <li className='tablet_gnb02'>
                <Link to='/list-wonkooklee' role='button'>
                  stores
                </Link>
              </li>
              <li className='tablet_gnb03'>
                <Link to='/list-wonkooklee' role='button'>
                  menus
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id='mstopWrap'>
          <div id='gnb'>
            <div className='sub_gnb_wrap'>
              <div className='sub_gnb_wrap_inner'>
                <h1 className='logo'>
                  <Link to='/list-wonkooklee'>Westabucks</Link>
                </h1>
                <nav className='util_nav'>
                  <ul>
                    <li className='util_nav01 sign_in'>
                      <Link to='/login-wonkooklee'>Sign In</Link>
                    </li>
                    <li className='util_nav02'>
                      <Link to='/list-wonkooklee'>My Westarbucks</Link>
                    </li>
                    <li className='util_nav03'>
                      <Link to='/list-wonkooklee'>
                        Customer Service &amp; Ideas
                      </Link>
                    </li>
                    <li className='util_nav04'>
                      <Link to='/list-wonkooklee'>Find a Store</Link>
                    </li>
                  </ul>
                </nav>
                <p className='btn_search'>
                  <Link to='/list-wonkooklee'>
                    <img
                      src='https://image.istarbucks.co.kr/common/img/common/icon_magnifier_black.png'
                      alt='통합검색'
                    />
                  </Link>
                </p>
              </div>
            </div>
            <nav className='sub_gnb_nav'>
              <div className='sub_gnb_nav_inner'>
                <ul>
                  <li className='gnb_nav01'>
                    <h2>
                      <Link to='/list-wonkooklee'>COFFEE</Link>
                    </h2>
                  </li>
                  <li className='gnb_nav02'>
                    <h2>
                      <Link to='/list-wonkooklee'>MENU</Link>
                    </h2>
                  </li>
                  <li className='gnb_nav03'>
                    <h2>
                      <Link to='/list-wonkooklee'>STORE</Link>
                    </h2>
                  </li>
                  <li className='gnb_nav04'>
                    <h2>
                      <Link to='/list-wonkooklee'>RESPONSIBILITY</Link>
                    </h2>
                  </li>
                  <li className='gnb_nav05'>
                    <h2>
                      <Link to='/list-wonkooklee'>WESTARBUCKS REWARDS</Link>
                    </h2>
                  </li>
                  <li className='gnb_nav06'>
                    <h2>
                      <Link to='/list-wonkooklee'>WHAT'S NEW</Link>
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
