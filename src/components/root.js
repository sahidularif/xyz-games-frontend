import React from 'react';
import { Provider } from 'react-redux';
//import { HashRouter } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Link, Route } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>
);

export default Root;