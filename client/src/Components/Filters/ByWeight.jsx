import React from "react";
import { useDispatch } from "react-redux";
import { filterWeight } from "../../Redux/Actions";
import s from "../NavBar/navBar.module.css";

export default function ByWeight({ setCurrentPage, setOrder }) {
  const dispatch = useDispatch();

  function handlefilterWeight(e) {
    dispatch(filterWeight(e.target.value));
    setOrder(e.target.value);
    setCurrentPage(1);
  }
  return (
    <div>
      Weight
      <div className={s.select}>
        <select onChange={(e) => handlefilterWeight(e)}>
          <option value="Asc">ASC</option>
          <option value="Des">DES</option>
        </select>
      </div>
    </div>
  );
}
