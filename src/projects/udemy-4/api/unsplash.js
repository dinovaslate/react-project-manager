import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID JlW7clcB2ZY529Za3AeokPoHq9WHqR0EaR_x12jEQWE",
  },
});
