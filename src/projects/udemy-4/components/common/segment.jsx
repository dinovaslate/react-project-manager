import React, { Component } from "react";

class Segment extends Component {
  state = {};
  renderImg() {
    const { isLoading, children } = this.props;
    if (isLoading) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading Image</div>
        </div>
      );
    } else {
      return <>{children}</>;
    }
  }
  render() {
    const { isVisible } = this.props;
    return (
      <div style={{ display: "flex" }} className={isVisible ? "" : "d-none"}>
        <div
          className="ui segment"
          style={{
            marginTop: "50px",
            width: "1100px",
            marginRight: "auto",
            marginLeft: "auto",
            minHeight: "500px",
          }}
        >
          {this.renderImg()}
        </div>
      </div>
    );
  }
}

export default Segment;
