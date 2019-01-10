import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Error404 from './components/ui/Error404'
import './stylesheets/styles.css';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

window.React = React
render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/about" component={App}/>
      <Route exact path="/error" component={Error404}/>
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);
