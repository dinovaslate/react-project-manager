import React, { Component } from "react";

class SerachBar extends Component {
  state = {
    term: "",
  };
  onFormSubmit = (e) => {
    const { onFSubmit } = this.props;
    e.preventDefault();
    onFSubmit(this.state.term);
  };
  render() {
    return (
      <>
        <form onSubmit={this.onFormSubmit}>
          <div className="ui search massive" style={{ display: "flex" }}>
            <div
              className="ui icon input"
              style={{
                width: "700px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "100px",
              }}
            >
              <input
                className="prompt"
                type="text"
                placeholder="Search Images..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className="search icon"></i>
            </div>
            <div className="results"></div>
          </div>
        </form>
      </>
    );
  }
}

export default SerachBar;
