import React, { useEffect, useState } from "react";
import { Card, Col, Row, Skeleton } from "antd";
import { useNavigate } from "react-router-dom";
import { getUniversityList } from "../../services/getList";
import Search from "../searchComponent/search";
import Sort from "../sortComponent/sort";
import "./listing.css";

const ListingComponent = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFound, setIsDataFound] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    } catch {
      console.error("handle error");
      const localStorageData = JSON.parse(localStorage.getItem("uniList"));
      if (localStorageData?.length) {
        setData(localStorageData);
        setFilteredData(localStorageData);
        setIsLoading(false);
      } else {
        setIsDataFound(true);
        setIsLoading(false);
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
          item?.country?.toLowerCase().includes(value?.toLowerCase())
        );
      } else {
        filtered = filteredData.filter((item) =>
          item?.name?.toLowerCase().includes(value?.toLowerCase())
        );
      }

      setData(filtered);
    }
  };

  // Sorting
  const handleSorting = (value) => {
    const sortOrder = value;

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
    setData([...sortedData]);
  };

  // on Search Input
  const onSearchTypeChange = (value) => {
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
            <Row gutter={[16, 16]}>
              {isLoading ? (
                <>
                  {[...Array(3)].map((_, index) => (
                    <Col key={index} xs={24} sm={12} md={8} lg={8} xl={8}>
                      <Skeleton active />
                    </Col>
                  ))}
                </>
              ) : (
                <>
                  {!isDataFound ? (
                    data?.map((uni) => {
                      return (
                        <>
                          {/* Ant UI Grid */}
                          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
                            <Card
                              className="job-list"
                              key={uni.name}
                              title={uni.name}
                              bordered={true}
                              onClick={() => handleViewDetails(uni.name)}
                              data-testid="detail-btn"
                            >
                              {uni.name}
                            </Card>
                          </Col>
                        </>
                      );
                    })
                  ) : (
                    <div className="error-msg">No Data Found!!!</div>
                  )}
                </>
              )}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListingComponent);
