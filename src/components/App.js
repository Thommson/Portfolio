import React, { Component } from 'react';

//Components
import Home from './ui/Home'
import About from './ui/About'


class App extends Component {

  render() {
    return (
      <div className="app">
      {
        (this.props.location.pathname === '/') ?
        <Home /> :
        <About />
      }
      </div>
    );
  }
};

export default App;
