import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';

const Application = (
  <Router >
    <App />
  </Router>
)

ReactDOM.render(Application, document.getElementById('root'));
registerServiceWorker();
