import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/common/spinner";

class App3 extends Component {
  state = {
    lat: null,
    errorMessage: "",
    month: new Date().getMonth() + 1,
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => {
        this.setState({ errorMessage: err.message });
      },
      {
        enableHighAccuracy: true,
      }
    );
  }
  renderContent() {
    const { lat, errorMessage, month } = this.state;
    return !errorMessage && !lat ? (
      <Spinner message="Please accept location request" />
    ) : errorMessage ? (
      <div>Error: {errorMessage} </div>
    ) : (
      <div>
        <SeasonDisplay month={month} lat={lat} />
      </div>
    );
  }

  render() {
    return (
      <div style={{ border: "10px solid red" }}>{this.renderContent()}</div>
    );
  }
}

export default App3;
