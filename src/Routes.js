import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// 휘민's 컴포넌트
import LoginHM from './pages/hwiminKim/Login/Login';
import ListHM from './pages/hwiminKim/List/List';
import DetailHM from './pages/hwiminKim/Detail/Detail';

// 원영's 컴포넌트
import LoginWY from './pages/wonyoungKim/Login/Login';
import ListWY from './pages/wonyoungKim/List/List';
import DetailWY from './pages/wonyoungKim/Detail/Detail';

// 시원's 컴포넌트
import LoginSW from './pages/siwonKim/Login/Login';
import ListSW from './pages/siwonKim/List/List';
import DetailSW from './pages/siwonKim/Detail/Detail';

// 예봄's 컴포넌트
import LoginYB from './pages/yebomLee/Login/Login';
import ListYB from './pages/yebomLee/List/List';
import DetailYB from './pages/yebomLee/Detail/Detail';

// 원국's 컴포넌트
import LoginWK from './pages/wonkookLee/Login/Login';
import ListWK from './pages/wonkookLee/List/List';
import DetailWK from './pages/wonkookLee/Detail/Detail';

class Routes extends React.Component {
  render() {
		return (
      <Router>
        <Switch>
          <Route exact path='/login-hwiminKim' component={LoginHM} />
          <Route exact path='/list-hwiminKim' component={ListHM} />
          <Route exact path='/detail-hwiminKim' component={DetailHM} />
          <Route exact path='/login-wonyoungKim' component={LoginWY} />
          <Route exact path='/list-wonyoungKim' component={ListWY} />
          <Route exact path='/detail-wonyoungKim' component={DetailWY} />
          <Route exact path='/login-siwonKim' component={LoginSW} />
          <Route exact path='/list-siwonKim' component={ListSW} />
          <Route exact path='/detail-siwonKim' component={DetailSW} />
          <Route exact path='/login-yebomLee' component={LoginYB} />
          <Route exact path='/list-yebomLee' component={ListYB} />
          <Route exact path='/detail-yebomLee' component={DetailYB} />
          <Route exact path='/login-wonkookLee' component={LoginWK} />
          <Route exact path='/list-wonkookLee' component={ListWK} />
          <Route exact path='/detail-wonkookLee' component={DetailWK} />
        </Switch>
      </Router>
    )
	}
}

export default Routes;