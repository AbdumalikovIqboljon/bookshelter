import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
ReactDOM.render (
  <React.StrictMode>

    <Router>
      <App />
      <Routes>
        <Route exact path='/'>Home</Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
