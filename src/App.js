import React from 'react';
import Routes from './Routes'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Scroll from './Scroll';
import { getUserLogin, setLogin } from './actions/UserActions';
import { connect } from 'react-redux';

class App extends React.Component {

  componentDidMount() {
    var user = sessionStorage.getItem('user');
    this.props.getUserLogin(user)
  }


  showPageComponent = (routes) => {
    var menu = null;
    if (routes.length > 0) {
      menu = routes.map((item, index) => {
        return <Route
          key={index}
          path={item.path}
          exact={item.exact}
          component={item.main}
        ></Route>
      })
    }
    return <Switch>
      {menu}
    </Switch>
  }

  render() {
    return (
      <BrowserRouter>
        <Scroll>
          <div className="App">
            <Header></Header>
            <Navbar />
            {this.showPageComponent(Routes)}
            {/* <Routes /> */}
            <Footer></Footer>
          </div>
        </Scroll>
      </BrowserRouter>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    isLogin: (user) => {
      dispatch(setLogin(user))
    },
    getUserLogin: (user) => {
      dispatch(getUserLogin(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(App);
