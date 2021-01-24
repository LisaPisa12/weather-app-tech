import React, { useState, useEffect, useRef } from "react";
import api from "../../api/apiservice";
import { useHistory, Route } from "react-router-dom";

import "./HomeElements.css";

const Home = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    city: "",
  });
  const [response, setResponse] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const handleOnChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUserInput((userInput) => ({
      ...userInput,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (userInput.city === "") return;
    else {
      api.fetchWeather(userInput.city);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      api.fetchWeather(userInput.city).then((response) =>
        setResponse(
          response.list,
          history.push("/forecast", {
            response: response,
            userInput: userInput,
          })
        )
      );
    } catch (error) {
      alert("Please checked that you've inputed all the values");
    }

    // .then(history.push("/forecast", { response: response }));
    // .then((response) => setResponse(response))
    // .then(history.push("/forecast"));
  };

  console.log("this is the user Input", userInput);
  console.log("this is the user Response", response);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className="welcome_div">Welcome</h1>
          <h3 className="welcome_header">Get the weather where you live</h3>

          <input
            name="name"
            placeholder="Your name"
            type="text"
            onChange={handleOnChange}
          />

          <input
            placeholder="Your city"
            name="city"
            type="text"
            onChange={handleOnChange}
          />
          <button>Search</button>
        </form>
      </div>
    </>
  );
};

export default Home;
