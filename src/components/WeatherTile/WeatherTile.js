import React, { useEffect } from "react";
import dayjs from "dayjs";
import "./WeatherTileElements.css";

const WeatherTile = (props) => {
  console.log("these are the props", props);

  const { name, city } = props.location.state.userInput;
  const forecast = props.location.state.response.list.filter(
    (_, i) => i % 8 === 0
  );

  const colors = [
    "linear-gradient(to right, #ec0d50, #f77926)",
    "linear-gradient(to right, #e930f8, #a711a5)",
    "linear-gradient(to right, #6153ef, #51d2c6)",
    "linear-gradient(to right, #6739eb, #c0aafd)",
    "linear-gradient(to right, #01df28, #10c797)",
  ];

  const getColor = () => {
    let length = colors.length;

    let randomNum = Math.floor(Math.random() * length);
    let color = colors[randomNum];
    colors.splice(randomNum, 1);
    return color;
  };

  return (
    <>
      <div className="forecast_display">
        <div className="header_div">
          <h1>Hi, {name}</h1>
          <h3 className="sub_header_div">
            Weather forecast: {city} for the next five days
          </h3>
        </div>
        <div className="forecast_container">
          {forecast.map((day) => {
            return (
              <div className="weather_tile" style={{ background: getColor() }}>
                <div className="temp_display">
                  <h1>{`${Math.ceil(day.main.temp)}°`}</h1>
                </div>
                <div className="day_display">
                  <h3>{dayjs.unix(day.dt).format("dddd")}</h3>
                  <p>{dayjs.unix(day.dt).format("MMMM DD YYYY")}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="header_div">
        <h1>Hi, {name}</h1>
        <h3>Weather forecast: {city} name for the next five days</h3>
      </div>
      <div className="tile_container">
        {forecast.map((day) => {
          return (
            <div className="temp_holder">
              <div className="top_half">
                <h1>{`${Math.ceil(day.main.temp)}°F`}</h1>
              </div>

              <div className="bottom_half">
                <h3>{dayjs(day.dt.toString()).format("dddd").toUpperCase()}</h3>
                <p>{dayjs(day.dt.toString()).format("MMMM DD YYYY")}</p>
              </div>
            </div>
          );
        })}
      </div> */}
    </>
  );
};

export default WeatherTile;
