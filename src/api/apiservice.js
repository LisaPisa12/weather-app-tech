const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

const fetchWeather = async (userInput) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    const weather = await response.json();
    return weather;
  } catch (err) {
    return console.error(err);
  }
  // return fetch(
  //   `${BASE_URL}?q=${userInput}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  // ).then((response) => response.json());
};

export default { fetchWeather };
