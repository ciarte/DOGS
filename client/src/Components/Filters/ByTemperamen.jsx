import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTemps } from "../../Redux/Actions";

export default function ByTemperament({ setCurrentPage }) {
  const temperamentsDB = useSelector((state) => state.temperaments);
  // const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  function handlefilterDog(e) {
    dispatch(filterTemps(e.target.value));
    setCurrentPage(1);
  }
  return (
    <>
      <select onChange={(e) => handlefilterDog(e)}>
        <option value="all">All</option>
        {temperamentsDB &&
          temperamentsDB.map((t) => {
            return (
              <>
                <option value={t.name}>{t.name}</option>
              </>
            );
          })}
      </select>
    </>
  );
}
