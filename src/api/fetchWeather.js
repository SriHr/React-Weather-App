import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "5380ec61ecac9669aa68736f0ea425fd";

export const fetchWeatherApp = async (query) => {
  const data = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
