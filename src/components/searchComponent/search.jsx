import React from "react";
import "./search.css";

const SearchComponent = ({ onSearchTypeChange, onInputChange, inputValue }) => {
  return (
    <div className="search-wrapper">
      <div className="search-input-append">
        <select
          data-testid="select-wrapper"
          className="filter-select"
          onChange={onSearchTypeChange}
        >
          <option>Select Search Type</option>
          <option value="Name">Search By Name</option>
          <option value="Country">Search By Country</option>
        </select>
      </div>
      <input
        className="form-control search-wrapper-input"
        type="text"
        placeholder="Search Here...."
        onChange={onInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default React.memo(SearchComponent);
