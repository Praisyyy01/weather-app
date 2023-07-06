import axios from "axios";

const url = "https://api.openweathermap.org/data/2.5/weather";
const key = "90658ec0c14e8933586b972a6acc3e64";

const fetchWeather = async (query) => {
  const { data } = await axios.get(url, {
    params: {
      q: query,
      units: "metric",
      APPID: key
    }
  });
  return data;
};

export default fetchWeather;
