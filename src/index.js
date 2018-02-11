import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import MainStackRouter from './router/MainStackRouter';

ReactDOM.render((
  <Router>
    <MainStackRouter/>
  </Router>
), document.getElementById('root'));

registerServiceWorker();
