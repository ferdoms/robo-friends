import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 ba b--green br3 bg-lightest-blue"
        id="search"
        placeholder="search robots"
        onChange={searchChange}
        />
    </div>
  );
};

export default SearchBox;
