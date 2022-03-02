import React, { Component } from "react";
import { Center, Square, Circle } from "@chakra-ui/react";
import Segment from "./common/segment";
import Content from "./common/content";
const App6 = (props) => {
  return (
    <>
      <div
        className="ui container"
        style={{ marginTop: "100px", width: "1450px" }}
      >
        <Segment state="show" type="stacked">
          <Content />
        </Segment>
      </div>
    </>
  );
};

export default App6;
