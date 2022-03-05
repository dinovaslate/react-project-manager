import React, { Component } from "react";
import Segment from "./common/segment";

class Video extends Component {
  render() {
    const { viewResult, viewResultState } = this.props;
    return (
      <>
        <Segment type="raised" state={viewResultState} minHeight="500px">
          {viewResultState === "waiting" ? (
            ""
          ) : (
            <div>
              <iframe
                title="Youtube Video"
                style={{ width: "100%" }}
                height="555"
                src={`https://www.youtube.com/embed/${viewResult.id.videoId}`}
                allowFullScreen
              ></iframe>
              <div className="ui warning message">
                <div className="header">
                  <h3>Description</h3>
                </div>
                {viewResult.snippet.description}
              </div>
            </div>
          )}
        </Segment>
      </>
    );
  }
}

export default Video;
