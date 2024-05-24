import React from "react";
import { Input, Select } from "antd";
import "./search.css";

const { Search } = Input;
const SearchComponent = ({ onSearchTypeChange, onInputChange, inputValue }) => {
  const options = [
    { value: "Name", label: "Search By Name" },
    { value: "Country", label: "Search By Country" },
  ];
  return (
    <>
      <div className="search-wrapper">
        <div className="search-input-append">
          <Select
            size="large"
            data-testid="select-wrapper"
            defaultValue="Select Search Type"
            onChange={onSearchTypeChange}
            options={options}
          />
        </div>
        <Search
          value={inputValue}
          onChange={onInputChange}
          size="large"
          placeholder="Search Here...."
          enterButton
        />
      </div>
    </>
  );
};

export default React.memo(SearchComponent);
