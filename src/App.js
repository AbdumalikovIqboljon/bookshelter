import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Error from './components/Error/Error';
import Homepage from './pages/HomePage/HomePage';
import Book from './components/Book/Book';
import SignUp from './components/SignUpForm/SignUpForm';
import AuthProvider from './contexts/AuthContext';
import { AppProvider } from './contexts/AppContext';

const Provider = ({ children }) => {
  return(
    <AuthProvider>

      <AppProvider>
        { children }
      </AppProvider>

    </AuthProvider>
  )
}
function App() {

  return (
    <Provider>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/error' element={<Error/>} />
        <Route path='/book/:id' element={<Book/>} />
      </Routes>
    </Provider>
  );
}

export default App;
