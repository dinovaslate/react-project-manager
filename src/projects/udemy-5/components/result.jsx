import React, { Component } from "react";

class Result extends Component {
  render() {
    const { results, viewResult } = this.props;
    return (
      <>
        {results.map((result) => (
          <div key={result.etag} className="ui horizontal fluid card">
            <div className="image">
              <img
                src={result.snippet.thumbnails.default.url}
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
            <div className="content">
              <div
                className="header"
                onClick={() => viewResult(result)}
                style={{ cursor: "pointer" }}
              >
                {result.snippet.title}
              </div>
              <div className="meta">
                <span className="category">{result.snippet.channelTitle}</span>
              </div>
              <div className="description">
                <p> {result.snippet.description}</p>
                <a
                  className="ui button blue"
                  href={`https://www.y2mate.com/youtube/${result.id.videoId}`}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Result;
