import React, { Component } from "react";

const ApprovalCard = ({ children }) => {
  return (
    <>
      <div className="ui card" style={{ userSelect: "auto" }}>
        <div className="content" style={{ userSelect: "auto" }}>
          {children}
        </div>
        <div className="extra content" style={{ userSelect: "auto" }}>
          <div className="ui two buttons" style={{ userSelect: "auto" }}>
            <div
              className="ui basic green button"
              style={{ userSelect: "auto" }}
            >
              Approve
            </div>
            <div className="ui basic red button" style={{ userSelect: "auto" }}>
              Decline
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalCard;
