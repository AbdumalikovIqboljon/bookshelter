import React from 'react';
import Header from '../../components/Header/Header';
import './HomePage.css';
import BookList from '../../components/BookList/BookList';
const Homepage = () => {
    return (
        <div className='container'>
            <Header />
            <BookList/>
        </div>
    );
}

export default Homepage;
