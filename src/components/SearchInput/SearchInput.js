import React from "react";
import "./SearchInput.css";
import { useGlobalContext } from '../../contexts/AppContext';

export default function SearchInput() {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus()
  },[])

  const searchBook = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="books"></label>
      <svg
        className="form-search-icon"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.14285 16.6628C13.64 16.6628 17.2857 13.1565 17.2857 8.83138C17.2857 4.50623 13.64 1 9.14285 1C4.64568 1 1 4.50623 1 8.83138C1 13.1565 4.64568 16.6628 9.14285 16.6628Z"
          stroke="#B8B9BE"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.25 14.7049L20 19.2732"
          stroke="#B8B9BE"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <input
        className="form-input"
        type="text"
        id="books"
        name="books"
        placeholder="Search books"
        ref={searchValue}
        onChange={searchBook}
        required
      />
    </form>
  );
}
