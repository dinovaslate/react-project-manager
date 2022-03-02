import React, { Component } from "react";
import Comment from "./common/comment";
import faker from "faker";
import ApprovalCard from "./common/approvalCard";

const Comments = () => {
  return (
    <div className="ui comments">
      <ApprovalCard>
        <Comment
          imgLink={faker.image.image()}
          content="Great blog post!"
          time="Today at 5:00"
          name="Alex"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          imgLink={faker.image.image()}
          content="Informative. Thanks."
          time="Today at 7:51"
          name="Sam"
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          imgLink={faker.image.image()}
          content="Looks great."
          time="Today at 9:01"
          name="Jane"
        />
      </ApprovalCard>
    </div>
  );
};

export default Comments;
