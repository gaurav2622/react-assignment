import React, { useEffect, useState } from "react";
import { Button, Descriptions, Divider } from "antd";
import { useNavigate } from "react-router-dom";
import DeleteSuccessComponent from "../deleteSuccessComponent/delete";
import "./detail.css";

const DetailComponent = () => {
  const [data, setData] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const universityName = localStorage.getItem("details");
    const parsedData = JSON.parse(universityName);
    console.log("Parsed Data:", parsedData); // Debugging
    setData(parsedData);
  }, []);

  const items = [
    { label: "Name", children: data?.name },
    { label: "Country", children: data?.country },
    { label: "Doamins", children: data?.domains },
    { label: "Web Pages", children: data?.web_pages },
    { label: "Alpha Two Code", children: data?.alpha_two_code },
  ];

  //   on click delete
  const handleDelete = () => {
    setTimeout(() => {
      localStorage.clear();
      setIsDelete(true);
    }, 100);
  };

  //   on click go to homepge
  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <div className="detail">
      <div className="container">
        <div className="detail-wrapper">
          <div className="detail-heading">
            <h2 className="listing-title">Listing Details</h2>
          </div>
          {isDelete && (
            <DeleteSuccessComponent handleGoToHome={handleGoToHome} />
          )}
          <div
            className={`detail-list border-bottom ${isDelete ? "hinge" : ""}`}
          >
            <div className="detail-list-content">
              <Descriptions layout="vertical" bordered items={items} />
            </div>
            <Divider />
            <div className="job-list-delete">
              <Button onClick={handleDelete} type="primary" danger>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailComponent);
