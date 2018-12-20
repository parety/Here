import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './pages/Header';
import Recommend from './pages/Recommend';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          {/* exact 路径完全相等的时候才显示路由内的内容 */}
          <Route exact path="/" component={Recommend} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const About = () => <h2>About</h2>;

export default App;