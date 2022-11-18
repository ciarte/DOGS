import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./Components/LandinPage/LandingPage";
// import NotFound from "./Components/NotFound/NotFound";
// import NavBar from "./Components/NavBar/NavBar";
import { DogDetail } from "./Components/DogDetail/DogDetail";
import DogsCreate from "./Components/DogsCreate/DogsCreate.jsx";
import { Dogs } from "./Components/Home/Dogs.jsx";
import ByTemperament from "./Components/Filters/ByTemperamen";

export default function App() {
  return (
    <React.Fragment>
      <Route exact path={"/"} component={LandingPage} />
      <Route path={"/home"} component={Dogs} />
      <Route path={'/temperament'} component={ByTemperament}/>
      <Route path={"/details/:id"} component={DogDetail} />
      <Route path={"/createDogs"} component={DogsCreate} />
      {/* <Route path={"*"} component={NotFound} /> */}
    </React.Fragment>
  );
}
