import React from "react";
import "./sort.css";

const SortComponent = ({ handleSorting }) => {
  return (
    <div className="job-filter">
      <div className="job-filter-flex">
        <div className="sort-flex">
          <div>
            <span className="filter-title">Sort By:</span>
          </div>
          <div className="sort-dropdown">
            <select
              data-testid="filter-wrapper"
              className="sort-select"
              onChange={handleSorting}
            >
              <option data-testid="select-az" value="ascending">
                A To Z
              </option>
              <option data-testid="select-za" value="descending">
                Z To A
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SortComponent);
