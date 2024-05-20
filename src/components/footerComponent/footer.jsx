import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="copyright">All Right Reserved.</div>
      </div>
    </div>
  );
};

export default React.memo(Footer);
