const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

const fetchWeather = async (userInput) => {
  let cache = {};
  let url = `${BASE_URL}?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`;
  try {
    if (cache[url]) {
      const weather = cache[url];
      return weather;
    } else {
      const response = await fetch(url);

      const weather = await response.json();
      cache[url] = weather;
      return weather;
    }
  } catch (err) {
    return console.error(err);
  }
  // return fetch(
  //   `${BASE_URL}?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  // ).then((response) => response.json());
};

export default { fetchWeather };
