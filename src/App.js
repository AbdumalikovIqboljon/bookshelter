import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
