import React from 'react';
import Header from '../../components/Header/Header';
import BookList from '../../components/BookList/BookList';
import Sidebar from '../../components/Sidebar/Sidebar';
import './HomePage.css';
const Homepage = () => {
    return (
        <div className='home-page'>
            <div className="container">
                
                <Header />
                <BookList/>
                <Sidebar/>
            </div>
        </div>
    );
}

export default Homepage;
