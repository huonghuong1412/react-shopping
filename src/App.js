import React from 'react';
import Routes from './Routes'
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

class App extends React.Component {

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
        <div className="App">
          <Header></Header>
          <Navbar />
          {this.showPageComponent(Routes)}
          {/* <Routes /> */}
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
