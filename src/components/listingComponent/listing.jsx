import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUniversityList } from "../../services/getList";
import "./listing.css";

const ListingComponent = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFound, setIsDataFound] = useState(false);
  const [searchType, setSearchType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await getUniversityList();
      setData(res.data);
      setFilteredData(res.data);
      localStorage.setItem("uniList", JSON.stringify(res.data));
    } catch {
      console.error("handle error");
      const localStorageData = JSON.parse(localStorage.getItem("uniList"));
      console.log(localStorageData);
      if (localStorageData?.length) {
        setData(localStorageData);
        setFilteredData(localStorageData);
      } else {
        setIsDataFound(true);
      }
    }
  };

  // on click navigate detail page
  const handleViewDetails = (name) => {
    const uniDetails = data.find((d) => d.name === name);
    localStorage.setItem("details", JSON.stringify(uniDetails));
    navigate("/details");
  };

  // on filter input search
  const onInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value) {
      setData(data);
    } else {
      let filtered = [];
      if (searchType === "Country") {
        filtered = filteredData.filter((item) =>
          item?.country?.toLowerCase().includes(value?.toLowerCase()),
        );
      } else {
        filtered = filteredData.filter((item) =>
          item?.name?.toLowerCase().includes(value?.toLowerCase()),
        );
      }

      setData(filtered);
    }
  };

  // Sorting
  const handleSorting = (e) => {
    const sortOrder = e.target.value;

    let sortedData;
    if (sortOrder === "A To Z") {
      sortedData = filteredData.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else if (sortOrder === "Z To A") {
      sortedData = filteredData.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
    console.log(sortedData);
    setData([...sortedData]);
  };

  // on Search Input
  const onSearchTypeChange = (e) => {
    let value = e.target.value;
    setSearchType(value);
  };

  return (
    <div className="listing">
      <div className="container">
        <div className="listing-wrapper">
          <div className="search-wrapper">
            <div className="search-input-append">
              <select className="filter-select" onChange={onSearchTypeChange}>
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

          <div className="job-filter">
            <div className="job-filter-flex">
              <div className="sort-flex">
                <div>
                  <span className="filter-title">Sort By:</span>
                </div>
                <div className="sort-dropdown">
                  <select className="sort-select" onChange={handleSorting}>
                    <option value="A To Z">A To Z</option>
                    <option value="Z To A">Z To A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="listing-heading">
            <h2 className="listing-title">Lisitng</h2>
          </div>

          <div className="listing-content">
            {!isDataFound ? (
              data?.map((uni) => {
                return (
                  <div
                    key={uni.name}
                    className="job-list border-bottom"
                    onClick={() => handleViewDetails(uni.name)}
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
