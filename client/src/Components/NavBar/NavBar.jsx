import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ByAlfabet from "../Filters/ByAlfabet";
import ByName from "../Filters/ByName";
import ByWeight from "../Filters/ByWeight";
import s from "../NavBar/navBar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { filterTempsPlace } from "../../Redux/Actions";


export default function NavBar({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();
  const temperamentsDB = useSelector((state) => state.temperaments);
  const [input, setInput] = useState({
    temp: "all",
    origin: "all",
  });
  console.log(input)

  function handlefilterDog(e) {
    e.preventDefault()
    setInput({
      ...input,
      temp: e.target.value,
    });
    dispatch(filterTempsPlace({...input,temp: e.target.value}));
    setCurrentPage(1);
  }

  function handleSelectOrigen(e) {
    e.preventDefault()
    setInput({
      ...input,
      origin: e.target.value,
    });
    dispatch(filterTempsPlace({...input,origin: e.target.value}));
    setCurrentPage(1);
  }
  return (
    <nav className={s.wrapper}>
      <>
        <NavLink to={"/createDogs"}>CreateDogs</NavLink>
      </>
      <>
        <div>
          Temperament
          <div className={s.select}>
            <select onChange={(e) => handlefilterDog(e)}>
            <option disabled selected>
              Select
            </option>
              <option key="0" value="all">
                All
              </option>
              {temperamentsDB &&
                temperamentsDB.map((t) => {
                  return (
                    <>
                      <option key={t.name} value={t.name}>
                        {t.name}
                      </option>
                    </>
                  );
                })}
            </select>
          </div>
        </div>
      </>
      <>
        <div>
          Place
          <div className={s.select}>
            <select  name={"origin"} onChange={(e) => handleSelectOrigen(e)}>
            <option disabled selected>
              Select tempe...
            </option>
              <option value="all">All</option>
              <option value="created">Created</option>
              <option value="api">Api</option>
            </select>
          </div>
        </div>
      </>
      < >
        <ByAlfabet setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </>
      <>
        <ByName setCurrentPage={setCurrentPage} />
      </>
      < >
        <ByWeight setCurrentPage={setCurrentPage} setOrder={setOrder} />
      </>
      <>
        <NavLink to={"/"}>Landing</NavLink>
      </>
    </nav>
  );
}
