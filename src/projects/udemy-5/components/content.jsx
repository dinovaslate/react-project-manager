import React, { Component } from "react";
import Result from "./result";
import Segment from "./common/segment";
import Video from "./video";

class Content extends Component {
  render() {
    const { state, searchResult, SetviewResult, viewResultState, viewResult } =
      this.props;

    return (
      <Segment state={state} type="stacked" minHeight="500px">
        <div className="ui stackable grid">
          <div className="ten wide column">
            <Video viewResult={viewResult} viewResultState={viewResultState} />
          </div>
          <div className="six wide column">
            <Result results={searchResult} viewResult={SetviewResult} />
          </div>
        </div>
      </Segment>
    );
  }
}

export default Content;
