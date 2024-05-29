import React from "react";
import { Button, Result } from "antd";
import "./delete.css";

const DeleteSuccessComponent = ({ handleGoToHome }) => {
  return (
    <Result
      status="success"
      title="Successfully Deleted"
      extra={[
        <Button type="primary" onClick={handleGoToHome}>
          Go To Home
        </Button>,
      ]}
    />
  );
};

export default React.memo(DeleteSuccessComponent);
