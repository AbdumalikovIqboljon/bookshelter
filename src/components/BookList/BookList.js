import React from 'react'
import './BookList.css';
import Book from '../Book/Book';
import { useGlobalContext } from '../../contexts/AppContext';
import Loading from '../Loading/Loading';

export default function BookList() {

    const { books, loading } = useGlobalContext();
    console.log(books)
    if(loading) {
        return <Loading/>
    }
    if(books.length < 1) {
        return (
            <h2>No books matched your criteria</h2>
        )
    }

  return (

    <div className='book-list'>
      {
        books.map((item) => {
          return <Book key={item.id} {...item} />
        })
      }
    </div>
    
  )
}
