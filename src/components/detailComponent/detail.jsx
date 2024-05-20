import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteSuccessComponent from "../deleteSuccessComponent/delete";
import "./detail.scss";

const DetailComponent = () => {
  const [data, setData] = useState({});
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const universityName = localStorage.getItem("details");
    setData(JSON.parse(universityName));
  }, []);

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
              <div className="state">
                {data?.name}, {data?.country}{" "}
              </div>
              <div className="detail-listing">
                <div className="detail-header">
                  <div className="header-title">Doamins</div>
                  <div className="list-name">
                    <a href="/">{data?.domains}</a>
                  </div>
                  <div className="header-title">Web Pages</div>
                  <div className="list-name">
                    <a href="/">{data?.web_pages}</a>
                  </div>
                  <div className="header-title">Aplha Two Code</div>
                  <div className="list-name">{data?.alpha_two_code}</div>
                </div>
              </div>
            </div>
            <div className="job-list-delete">
              <button
                className="btn-common btn-delete"
                type="button"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DetailComponent);
