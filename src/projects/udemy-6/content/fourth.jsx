import "../App.css";
import React, { useEffect, useState } from "react";
import axios from "./../api/weather";
import { Center } from "@chakra-ui/react";
import Input from "../common/input";
import WeatherCard from "../common/WeatherCard";
import { Grid, GridItem } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Weather = () => {
  const [cities, setCities] = useState([]);
  const [cityToAdd, setCityToAdd] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      const { data } = await axios.get("https://geolocation-db.com/json/");
      if (data.city) {
        setCities([data.city]);
      }
    };

    if (localStorage.getItem("cities") === null) {
      getLocation();
    } else {
      setCities(JSON.parse(localStorage.getItem("cities")));
    }

    if (localStorage.getItem("isFirst") === null) {
      setShowMessage(true);
      localStorage.setItem("isFirst", JSON.stringify(true));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const renderWeatherCard = () => {
    return cities.map((town) => (
      <WeatherCard
        key={town}
        city={town}
        cities={cities}
        setCities={setCities}
      />
    )); //Always reading city.map is not a function
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCities([...cities, cityToAdd]); // Nevertheless, Push an empty string
    setCityToAdd("");
  };

  return (
    <>
      {showMessage && (
        <Alert status="info" mb={6}>
          <AlertIcon />
          The time is determined by the observation time
        </Alert>
      )}
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Input
          type="text"
          placeholder="input city..."
          styling="fluid"
          size="medium"
          onInputChange={(e) => {
            setCityToAdd(e.target.value);
          }}
          value={cityToAdd}
        />
      </form>
      <Center mt={7}>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {renderWeatherCard()}
        </Grid>
      </Center>
    </>
  );
};

export default Weather;
