import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UniversityContext } from "../../context/UniversityContext";
import Search from "../searchComponent/search";
import Sort from "../sortComponent/sort";
import "./listing.css";

const ListingComponent = () => {
  const { data, setData, filteredData, isDataFound } =
    useContext(UniversityContext);
  const [inputValue, setInputValue] = useState("");
  const [searchType, setSearchType] = useState("");
  const navigate = useNavigate();

  // on click navigate detail page
  const handleViewDetails = (name) => {
    const uniDetails = data.find((d) => d.name === name);
    navigate("/details", { state: { details: uniDetails } });
  };

  // on filter input search
  const onInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputValue(value);

    if (!value) {
      setData(filteredData);
      return;
    }

    const key = searchType === "Country" ? "country" : "name";
    const filtered = filteredData.filter((item) =>
      item[key]?.toLowerCase().includes(value)
    );

    setData(filtered);
  };

  const handleSorting = (e) => {
    const sortOrder = e.target.value;
    const sortedData = [...filteredData].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) return sortOrder === "ascending" ? -1 : 1;
      if (nameA > nameB) return sortOrder === "ascending" ? 1 : -1;
      return 0;
    });

    setData(sortedData);
  };

  // on Search Input
  const onSearchTypeChange = (e) => {
    let value = e.target.value;
    setSearchType(value);
  };

  return (
    <div className="listing" data-testid="wrapper">
      <div className="container">
        <div className="listing-wrapper">
          <Search
            onInputChange={onInputChange}
            onSearchTypeChange={onSearchTypeChange}
            inputValue={inputValue}
          />
          <Sort handleSorting={handleSorting} />

          <div className="listing-heading">
            <h2 className="listing-title">Listing</h2>
          </div>

          <div className="listing-content">
            {!isDataFound ? (
              data?.map((uni) => {
                return (
                  <div
                    key={uni.name}
                    className="job-list border-bottom"
                    onClick={() => handleViewDetails(uni.name)}
                    data-testid="detail-btn"
                  >
                    <div className="job-list-content">
                      <div className="state">{uni.name}</div>
                      <div className="name">{uni.country}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="error-msg">No Data Found!!!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListingComponent);
