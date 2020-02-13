import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green ba-lightest-blue"
        type="search"
        placeholder="جستجوی ربات"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
