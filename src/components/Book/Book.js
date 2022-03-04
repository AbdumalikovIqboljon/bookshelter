import React from "react";
import { Link } from "react-router-dom";
import './Book.css';
export default function Book({
  id,
  authors,
  title,
  subtitle,
  img,
  publishedDate,
}) {
  return (
    <div className="book-item">
      <div className="img-container">
        <img className="book-img" src={img} alt={subtitle} />
      </div>
      <div className="book-footer">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">{authors}</p>
        <span className="book-published-date">{publishedDate}</span>
        <Link to={`/book/${id}`} />
      </div>
    </div>
  );
}
