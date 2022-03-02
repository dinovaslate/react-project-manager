import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa9,
  faCloudMeatball,
  faCloudMoon,
  faCloudRain,
  faCloudShowersHeavy,
  faCloudSun,
  faMoon,
  faPooStorm,
  faSmog,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const getIcon = (param, time) => {
  const areThereAnyCommas = param.includes(",");
  param = areThereAnyCommas ? param.slice(0, param.indexOf(",")) : param;
  const hour = time.substring(0, 2);
  const getContext = time.substring(6, 8);
  const isDayTime = getContext === "AM" ? hour >= 6 : hour <= 6;
  switch (param) {
    case "cloudy":
      return <i class="fa-solid fa-clouds"></i>;
    case "partly cloudy":
      return isDayTime ? (
        <FontAwesomeIcon icon={faCloudSun} size="6x" />
      ) : (
        <FontAwesomeIcon icon={faCloudMoon} size="6x" />
      );
    case "sunny":
      return <FontAwesomeIcon icon={faSun} size="6x" />;
    case "overcast":
    case "mist":
    case "fog":
    case "freezing fog":
    case "light drizzle, mist":
      return <FontAwesomeIcon icon={faSmog} size="6x" />;
    case "patchy rain possible":
    case "patchy sleet possible":
    case "light rain shower":
      return <FontAwesomeIcon icon={faCloudRain} size="6x" />;
    case "patchy snow possible":
    case "patchy freezing drizzle possible":
    case "blowing snow":
    case "freezing drizzle":
    case "light freezing rain":
      return <FontAwesomeIcon icon={faSnowflake} size="6x" />;
    case "clear":
      return isDayTime ? (
        <FontAwesomeIcon icon={faSun} size="6x" />
      ) : (
        <FontAwesomeIcon icon={faMoon} size="6x" />
      );
    case "thundery outbreaks possible":
      return <FontAwesomeIcon icon={faPooStorm} size="6x" />;
    case "blizzard":
    case "heavy freezing drizzle":
      return <FontAwesomeIcon icon={faCloudMeatball} size="6x" />;
    case "patchy light drizzle":
    case "light drizzle":
    case "patchy light rain":
    case "light rain":
      return <FontAwesomeIcon icon={faCloudSun} size="6x" />;
    case "moderate rain at time":
    case "moderate rain":
    case "heavy rain at time":
    case "heavy rain":
    case "rain with thunderstorm":
    case "thunderstorm in vicinity":
      return <FontAwesomeIcon icon={faCloudShowersHeavy} size="6x" />;
    default:
      console.log(param);
      return isDayTime ? (
        <FontAwesomeIcon icon={faCloudSun} size="6x" />
      ) : (
        <FontAwesomeIcon icon={faCloudMoon} size="6x" />
      );
  }
};
