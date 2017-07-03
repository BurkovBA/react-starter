import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from 'pages/Home.jsx';
import About from 'pages/About.jsx';

ReactDOM.render(
  <Router history="">
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>,
  document.getElementById('main')
);