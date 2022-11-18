import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTemps } from "../../Redux/Actions";
import s from "../NavBar/navBar.module.css";

export default function ByTemperament({ setCurrentPage }) {
  const temperamentsDB = useSelector((state) => state.temperaments);
  // const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  function handlefilterDog(e) {
    dispatch(filterTemps(e.target.value));
    setCurrentPage(1);
  }
  return (
    <div>
      Temperament
      <div className={s.select}>
        <select onChange={(e) => handlefilterDog(e)}>
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
  );
}
