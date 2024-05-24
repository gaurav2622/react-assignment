import React from "react";
import { Select } from "antd";
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
            {/* <select
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
            </select> */}

            {/* Ant UI Select */}
            <Select
              data-testid="filter-wrapper"
              defaultValue="A TO Z"
              onChange={handleSorting}
              options={[
                { value: "ascending", label: "A TO Z" },
                { value: "descending", label: "Z To A" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SortComponent);
