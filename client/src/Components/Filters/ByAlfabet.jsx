import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAtoZ } from "../../Redux/Actions";

export default function ByAlfabet({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  function handleByAlfabetic(e) {
    dispatch(filterAtoZ(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <label>ALFABETICAMENTE</label>
      <select onChange={(e) => handleByAlfabetic(e)}>
        <option value="Asc">Ascendent</option>
        <option value="Des">Descendent</option>
      </select>
    </>
  );
}
