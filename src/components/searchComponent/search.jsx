import React, { useState } from "react";
import "./search.css";

const SearchComponent = ({ onSearchTypeChange, onInputChange, inputValue }) => {
  const [searchType, setSearchType] = useState("");
  const handleSearchTypeChange = (event) => {
    const selectedType = event.target.value;
    setSearchType(selectedType);
    if (onSearchTypeChange) {
      onSearchTypeChange(event);
    }
  };

  const getPlaceholderText = () => {
    if (searchType === "Name") {
      return "Search by Name...";
    } else if (searchType === "Country") {
      return "Search by Country...";
    } else {
      return "Search Here...";
    }
  };
  return (
    <div className="search-wrapper-flex">
      <div className="search-input-append">
        <select
          data-testid="select-wrapper"
          className="filter-select"
          onChange={handleSearchTypeChange}
        >
          <option value="">Select Search Type</option>
          <option value="Name">Search By Name</option>
          <option value="Country">Search By Country</option>
        </select>
      </div>
      <input
        className="form-control search-wrapper-input"
        type="text"
        placeholder={getPlaceholderText()}
        onChange={onInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default React.memo(SearchComponent);
