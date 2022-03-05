import React from "react";
import { Link } from "react-router-dom";

import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from "../../contexts/AppContext";
import "./Book.css";

export default function Book({ id, authors, title, subtitle, img,publishedDate }) {

  const { openSidebar } = useGlobalContext()

  return (
    <div className="book-item">
      <div className="book-item-top">
        <div className="img-container">
          <img className="book-img" src={img} alt={subtitle} />
        </div>
        <div className="info-wrapper">
          <h3 className="book-heading">{title}</h3>
          <p className="book-author">{authors}</p>
          <span className="book-published-date">{publishedDate}</span>
        </div>
      </div>

      <div className="buttons">
        <button className="bookmark btn" type="button">
          Bookmark
        </button>
        <button className="more-info btn sidebar-toggle" type="button" onClick={openSidebar}>
          More info
        </button>

        <Link className="read-more" to="#">
          Read
        </Link>
      </div>
    </div>
  );
}
