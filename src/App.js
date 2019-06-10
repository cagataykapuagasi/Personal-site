import React from 'react';
import { Provider } from 'mobx-react';
import root from './store/root';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Splash, Blog } from './pages';
import history from './history';


export default class App extends React.Component {

  componentDidMount() {
    root.blog.loadDatas();
  }

  render() {
    return (
      <Provider root={root}>
        <Router history={history}>
          <Route path="/" exact component={Splash} />
          <Route path="/blog" component={Blog} />
        </Router>
      </Provider>
    );
  }
}

