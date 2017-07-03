import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from 'pages/Home.jsx';

ReactDOM.render(
  <Router history="">
    <Home/>
  </Router>,
  document.getElementById('main')
);