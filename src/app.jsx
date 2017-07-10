import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, browserHistory} from 'react-router-dom';

import Layout from 'pages/Layout.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.min.css';
import './styles/style.scss';
import metismenu from 'metismenu';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route exact path="/" component={Layout} />
  </Router>,
  document.getElementById('main')
);
