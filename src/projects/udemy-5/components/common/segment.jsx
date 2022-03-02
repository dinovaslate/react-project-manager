import React, { Component } from "react";

class Segment extends Component {
  renderSegment() {
    const { state, children } = this.props;
    switch (state) {
      case "loading":
        return (
          <div className="ui active dimmer">
            <div className="ui medium elastic text loader">Loading</div>
          </div>
        );

      case "waiting":
        return (
          <div className="ui active inverted dimmer">
            <div className="ui medium text">
              Waiting for an action from user
            </div>
          </div>
        );
      case "show":
        return children;

      default:
        return (
          <div className="ui red inverted segment">
            ERROR: State is not defined
          </div>
        );
    }
  }
  render() {
    return (
      <div
        className={`ui ${this.props.type} fluid segment`}
        style={{ width: this.props.width, minHeight: this.props.minHeight }}
      >
        {this.renderSegment()}
      </div>
    );
  }
}

export default Segment;
