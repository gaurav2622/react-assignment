import React from "react";
import "./delete.scss";

const DeleteSuccessComponent = ({ handleGoToHome }) => {
  return (
    <div className="delete-wrapper">
      <h2 className="delete-title">Delete Succesfully!!</h2>
      <button
        type="button"
        className="btn-common btn-home"
        onClick={handleGoToHome}
      >
        Go To Home
      </button>
    </div>
  );
};

export default React.memo(DeleteSuccessComponent);
