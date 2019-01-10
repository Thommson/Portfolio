import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Error404 from './components/ui/Error404'
import './stylesheets/styles.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

window.React = React
render(
  <Router >
    <div className="App">
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route exact path="/error" component={Error404}/>
    </div>
  </Router>,
  document.getElementById('root')
);
