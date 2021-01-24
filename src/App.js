import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WeatherTile from "./components/WeatherTile/WeatherTile";

import dotenv from "dotenv";
import "./globalStyles.css";
dotenv.config();

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={WeatherTile} path="/forecast" />
      </Switch>
    </Router>
  );
};

export default App;
