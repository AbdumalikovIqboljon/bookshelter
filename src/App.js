import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Error from './components/Error/Error';
import Homepage from './pages/HomePage/HomePage';
import Book from './components/Book/Book';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/book/:id' element={<Book/>} />
      </Routes>
    </Router>
  );
}

export default App;
