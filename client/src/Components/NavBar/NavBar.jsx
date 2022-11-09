import React from "react";
import { NavLink } from "react-router-dom";
import ByPlace from "../Filters/ByPlace";
import ByTemperament from "../Filters/ByTemperamen";
import ByAlfabet from "../Filters/ByAlfabet";
// import SearchBar from "../SearchBar/SearchBar";
export default function NavBar({ setCurrentPage, setOrder }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/createDogs"}>CreateDogs</NavLink>
        </li>
        <ByTemperament setCurrentPage={setCurrentPage} />
        <ByPlace setCurrentPage={setCurrentPage} />
        <ByAlfabet setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </ul>
    </nav>
  );
}
