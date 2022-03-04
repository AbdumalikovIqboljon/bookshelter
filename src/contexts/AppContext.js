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

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { items } = data;
      
      if(items) {
        const newBooks = items.map((item) => {
          
          const { id,
                  volumeInfo: {title},
                  volumeInfo: {authors},
                  volumeInfo: {publishedDate},
                  volumeInfo: {subtitle}
                } = item;

          const img = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null;

          return { id,
                   title,
                   authors,
                   publishedDate,
                   subtitle,
                   img
                  }
        })
        setBooks(newBooks)
      } else {
        setBooks([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBooks();
  },[searchTerm])



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