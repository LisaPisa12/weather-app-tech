import React from "react";

const WeatherTile = (props) => {
  console.log("these are the props", props);

  const { name, city } = props.location.state.userInput;
  const { forecast } = props.location.state.response.list.slice(0, 6);

  return (
    <div>
      <h1>Hi, {name}</h1>
      <h3>Weather forecast: {city} name for the next five days</h3>
      <div className="tile_container">
        {/* {forecast.map((element) => {
          <div className="temp_holder">
            <div className="top_half">
              <h1>{element.main.temp}</h1>
            </div>

            <div className="bottom_half">
              <h3>{element.dt}</h3>
              <p>{element.currentDate}</p>
            </div>
          </div>;
        })} */}
      </div>
    </div>
  );
};

export default WeatherTile;
