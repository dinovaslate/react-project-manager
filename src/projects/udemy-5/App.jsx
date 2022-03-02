import React, { Component } from "react";
import youtube from "./api/youtube";
import Search from "./components/search";
import Content from "./components/content";

class App5 extends Component {
  state = {
    contentState: "waiting",
    items: [],
    viewResultState: "waiting",
    viewResult: "",
  };

  viewResult = (result) => {
    console.log(result);
    this.setState({ viewResult: result, viewResultState: "show" });
  };
  handleFormSubmit = async (input) => {
    this.setState({ contentState: "loading" });
    const response = await youtube.get("youtube/v3/search", {
      params: {
        key: "AIzaSyDjAbvHab9blPwwb3eF5_NJlEz9wWKktGo",
        part: "snippet",
        q: input,
        maxResults: 5,
      },
    });
    this.setState({
      items: response.data.items,
      contentState: "show",
      viewResultState: "waiting",
    });
  };
  render() {
    return (
      <div
        className="ui container"
        style={{ marginTop: "100px", width: "1450px" }}
      >
        <Search onFSubmit={this.handleFormSubmit} />
        <Content
          state={this.state.contentState}
          searchResult={this.state.items}
          SetviewResult={this.viewResult}
          viewResultState={this.state.viewResultState}
          viewResult={this.state.viewResult}
        />
      </div>
    );
  }
}

export default App5;
