import React, { Component, useState, useEffect } from "react";
import "../App.css";
import weather from "../api/weather";
import { getIcon } from "./icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Grid, GridItem } from "@chakra-ui/react";

const WeatherCard = ({ city, cities, setCities }) => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [state, setState] = useState("loading");
  useEffect(() => {
    const getWeather = async (city) => {
      try {
        const { data } = await weather.get("/current", {
          params: {
            access_key: "4ba6b2112a3d7ca8ab0eb3a911b9c78f",
            query: city,
          },
        });
        setCurrentWeather(data.current);
        setState("show");
      } catch (e) {
        console.log(e);
        deleteWeatherCard();
      }
    };
    getWeather(city);
  }, []);

  const deleteWeatherCard = () => {
    const data = cities.filter((town) => town != city);
    setCities(data);
  };

  const renderCard = () => {
    switch (state) {
      case "loading":
        return (
          <div className="ui active dimmer">
            <div className="ui medium elastic text loader">Loading</div>
          </div>
        );
      case "show":
        return (
          <GridItem w="100%">
            <div className="weather-wrapper">
              <div className="weather-card madrid">
                <div className="weather-icon">
                  {state === "show" &&
                    getIcon(
                      currentWeather.weather_descriptions[0].toLowerCase(),
                      currentWeather.observation_time
                    )}
                </div>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="close"
                  onClick={deleteWeatherCard}
                />
                <h1>{`${currentWeather.temperature}º`}</h1>
                <p>{city}</p>
              </div>
            </div>
          </GridItem>
        );
    }
  };

  //
  return renderCard();
};

export default WeatherCard;
