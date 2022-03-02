import React, { Component } from "react";
import Segment from "./common/segment";
import Input from "./common/input";

class Search extends Component {
  state = {
    term: "",
  };
  onFormSubmit = (e) => {
    const { onFSubmit } = this.props;
    e.preventDefault();
    onFSubmit(this.state.term);
  };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <Segment state="show" type="stacked">
        <Input
          state="show"
          styling="fluid"
          size="massive"
          type="text"
          placeholder="Search video..."
          onFormSubmit={this.onFormSubmit}
          onInputChange={this.onInputChange}
          value={this.state.term}
        />
      </Segment>
    );
  }
}

export default Search;
