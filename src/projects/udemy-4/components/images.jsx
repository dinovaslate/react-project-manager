import React, { Component } from "react";
import "../App.css";
import ImageCard from "./ImageCard";
import Segment from "./common/segment";
class Images extends Component {
  render() {
    const { isSearched, isLoading, pics } = this.props;
    return (
      <Segment isVisible={isSearched} isLoading={isLoading}>
        <div className="image-list">
          {pics.map((pic) => (
            <ImageCard pic={pic} className="ui fluid image" key={pic.id} />
          ))}
        </div>
      </Segment>
    );
  }
}

export default Images;
