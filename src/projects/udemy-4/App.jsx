import React, { Component } from "react";
import unsplash from "./api/unsplash";
import SerachBar from "./components/common/searchbar";
import Images from "./components/images";

class App4 extends Component {
  state = {
    pics: [],
    loading: false,
    searched: false,
  };
  handleFormSubmit = async (term) => {
    this.setState({ loading: true, searched: true });
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term,
        per_page: 20,
      },
    });

    this.setState({ pics: response.data.results, loading: false });
  };
  render() {
    return (
      <>
        <SerachBar onFSubmit={this.handleFormSubmit} />
        <Images
          pics={this.state.pics}
          isLoading={this.state.loading}
          isSearched={this.state.searched}
        />
      </>
    );
  }
}

export default App4;
