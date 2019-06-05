import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Splash, Blog } from './pages';
import history from './history';

export default class App extends React.Component {

  componentWillMount() {
    history.push('/splash');
  }

  render() {
    return (
      <Router history={history}>
          <Route path="/splash" component={Splash} />
          <Route path="/blog" component={Blog} />
      </Router>
    );
  }
}

