import React, { Component } from "react";
import Particles from "react-tsparticles";
import { cold } from "./cold";
import { hot } from "./hot";
import "../styling/SeasonDisplay.css";
const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    text: "Burr it's chilly",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 3 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "summer" : "winter";
  }
};
const renderParticles = (lat, month) => {
  const season = getSeason(lat, month);
  if (season === "summer") {
    return <Particles options={hot} className="hot" />;
  } else {
    return <Particles options={cold} className="cold" />;
  }
};
const SeasonDisplay = ({ lat, month }) => {
  const season = getSeason(lat, month);
  const { text, iconName } = seasonConfig[season];
  return (
    <>
      {renderParticles(lat, month)}
      <div className={`season-display ${season}`}>
        <i className={`icon-left white massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
      </div>
    </>
  );
};

export default SeasonDisplay;
