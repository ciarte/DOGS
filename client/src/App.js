import "./App.css";
import React from "react";
import { Switch, Route } from 'react-router-dom'
import {LandingPage} from "./Components/LandinPage/LandingPage";
import {NotFound} from "./Components/NotFound/NotFound";
import { DogDetail}  from "./Components/DogDetail/DogDetail";
import {DogsCreate} from "./Components/DogsCreate/DogsCreate.jsx";
import { Dogs}  from "./Components/Home/Dogs.jsx";


export default function App() {
  return (
    <Switch>
      <Route exact path="/"component={LandingPage} />
      <Route exact path="/home" component={Dogs} />
      <Route exact path="/details/:id" component={DogDetail} />
      <Route exact path="/createDogs" component={DogsCreate} />
      <Route  path="*" component={NotFound} />
    </Switch>
  );
}
