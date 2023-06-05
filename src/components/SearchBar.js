import "./SearchBar.css";
import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div className="searchbar">
      <form className="form" onSubmit={handleClick}>
        <label>Enter Search Item</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
