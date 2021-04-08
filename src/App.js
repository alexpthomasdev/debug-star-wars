import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Error404 from "./Components/Error404";
import MovieInfo from "./Components/MovieInfo";
import Lightsabers from "./Components/Lightsabers";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/movie/:id">
          <MovieInfo />
        </Route>

        <Route path="/lightsabers">
          <Lightsabers />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
