import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUniversitiesRequest,
  fetchUniversitiesSuccess,
  fetchUniversitiesFailure,
  storeUniversityDetails,
} from "../../store/actions";
import { getUniversityList } from "../../services/getList";
import Search from "../searchComponent/search";
import Sort from "../sortComponent/sort";
import "./listing.css";

const ListingComponent = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.universitiesReducer);
  const { data, loading, error } = list;
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFound, setIsDataFound] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //setLoading = true
    try {
      const res = await getUniversityList();
      dispatch(fetchUniversitiesSuccess(res.data));
      setFilteredData(res.data);
    } catch {
      console.error("handle error");
      dispatch(fetchUniversitiesFailure(error));
      setIsDataFound(true);
    } finally {
      //setLoading = false
    }
  };

  // on click navigate detail page
  const handleViewDetails = (name) => {
    const uniDetails = data.find((d) => d.name === name);
    dispatch(storeUniversityDetails(uniDetails));
    const queryParams = new URLSearchParams({
      name: uniDetails?.domains[0],
    }).toString();
    navigate(`/details/?${queryParams}`);
  };

  // on filter input search
  const onInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (!value) {
      setFilteredData(data);
    } else {
      let filtered = [];
      if (searchType === "Country") {
        filtered = data.filter((item) =>
          item?.country?.toLowerCase().includes(value?.toLowerCase())
        );
      } else {
        filtered = data.filter((item) =>
          item?.name?.toLowerCase().includes(value?.toLowerCase())
        );
      }
      setFilteredData(filtered);
    }
  };

  // Highlight text
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={index} className="highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  // Sorting
  const handleSorting = (e) => {
    const sortOrder = e.target.value;

    let sortedData;
    if (sortOrder === "ascending") {
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
    } else if (sortOrder === "descending") {
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
    setFilteredData([...sortedData]);
  };

  // on Search Input
  const onSearchTypeChange = (e) => {
    let value = e.target.value;
    setSearchType(value);
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  return (
    <div className="listing" data-testid="wrapper">
      <section className="search-wrapper">
        <div className="container">
          <Search
            onInputChange={onInputChange}
            onSearchTypeChange={onSearchTypeChange}
            inputValue={inputValue}
          />
        </div>
      </section>
      <section className="search-list-wrapper">
        <div className="container">
          <Sort handleSorting={handleSorting} />
        </div>
      </section>
      <section className="listing-container">
        <div className="listing-wrapper">
          <div className="listing-heading">
            <h2 className="listing-title">Listing</h2>
          </div>

          <div className="listing-content">
            {!isDataFound ? (
              filteredData.slice(0, visibleCount).map((uni) => {
                return (
                  <div
                    key={uni.name}
                    className="job-list border-bottom"
                    onClick={() => handleViewDetails(uni.name)}
                    data-testid="detail-btn"
                  >
                    <div className="job-list-content">
                      <div className="state">
                        {getHighlightedText(uni.name, inputValue)}
                      </div>
                      <div className="name">
                        {getHighlightedText(uni.country, inputValue)}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="error-msg">No Data Found!!!</div>
            )}
          </div>
          {visibleCount < filteredData.length && (
            <div className="show-wrapper">
              <button className="show-more-btn" onClick={handleShowMore}>
                Show More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default React.memo(ListingComponent);
