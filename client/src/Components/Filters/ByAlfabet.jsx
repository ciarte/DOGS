import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAtoZ } from "../../Redux/Actions";
import s from "../NavBar/navBar.module.css";

export default function ByAlfabet({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  function handleByAlfabetic(e) {
    dispatch(filterAtoZ(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
    // console.log(e.target.value);
  }
  return (
    <div>
      Alfabetic
      <div className={s.select}>
        <select onChange={(e) => handleByAlfabetic(e)}>
          <option value="Asc">Ascendent</option>
          <option value="Des">Descendent</option>
        </select>
      </div>
    </div>
  );
}
