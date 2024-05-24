import React from "react";
import { Button } from "antd";
import "./delete.css";

const DeleteSuccessComponent = ({ handleGoToHome }) => {
  return (
    <div className="delete-wrapper">
      <h2 className="delete-title">Delete Succesfully!!</h2>
      <Button onClick={handleGoToHome} type="primary" success>
        Go To Home
      </Button>
    </div>
  );
};

export default React.memo(DeleteSuccessComponent);
