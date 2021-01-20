import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Forecast from "./components/Forecast/Forecast";
import "./globalStyles";
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/forecast" component={Forecast} />
    </Switch>
  );
};

export default App;
