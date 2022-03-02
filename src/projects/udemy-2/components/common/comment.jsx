import React, { Component } from "react";

const Comment = ({ imgLink, content, time, name }) => {
  return (
    <>
      <div className="comment" style={{ userSelect: "auto" }}>
        <a className="avatar" style={{ userSelect: "auto" }}>
          <img src={imgLink} style={{ userSelect: "auto" }} />
        </a>
        <div className="content" style={{ userSelect: "auto" }}>
          <a className="author" style={{ userSelect: "auto" }}>
            {name}
          </a>
          <div className="metadata" style={{ userSelect: "auto" }}>
            <div className="date" style={{ userSelect: "auto" }}>
              {time}
            </div>
          </div>
          <div className="text" style={{ userSelect: "auto" }}>
            {content}
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
