
import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

//Components
import { Home, About, Gallery } from './scenes';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/gallery/:id" component={Gallery} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
