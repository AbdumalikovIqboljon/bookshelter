import React, { createContext, useContext, useState, useEffect } from 'react';
// import App from '../firebase';

// export function useApp() {
//   return useContext(AppContext)
// }

const url = 'https://www.googleapis.com/books/v1/volumes?q=python';
const AppContext = createContext();



const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('a');

  // const [currentUser, setCurrentUser] = useState();

  // function signup(username, password) {
  //    return App.createUserWithUsernameAndPassword(username, password)
  // }

  // useEffect(() => {
  //   const unsubscribe = App.onAppStateChanged(user => {
  //     setCurrentUser(user)
  //   })

  //   return unsubscribe
  // }, [])

  // const value = {
  //   currentUser,
  //   signup
  // }

  return(
    <AppContext.Provider value={{
      loading,
      searchTerm,
      books,
      setSearchTerm
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {
  AppProvider,
  AppContext,
}