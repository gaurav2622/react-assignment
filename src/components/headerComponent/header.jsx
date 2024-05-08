import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex">
          <div className="logo">LOGO</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
