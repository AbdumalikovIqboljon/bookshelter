import React, { createContext, useContext, useState } from 'react';
import auth from './firebase';
const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}


const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState();

  function signup(username, password) {
     return auth.createUserWithUsernameAndPassword(username, password)
  }

  const value = {
    currentUser
  }

  return(
    <AuthContext.Provider value='hello'>
      {children}
    </AuthContext.Provider>
  )
}

export {
  AuthProvider,
  AuthContext,
}