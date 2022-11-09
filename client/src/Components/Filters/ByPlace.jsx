import React from "react";
import {  useDispatch } from "react-redux";
import { filterCreated } from "../../Redux/Actions";

export default function ByPlace( {setCurrentPage}) {
  // const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  function handlefilterDog(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1)
  }
  return (
    <>
      <select onChange={(e) => handlefilterDog(e)}>
        <option value="all">All</option>
        <option value="created">Created</option>
        <option value="api">Api</option>
      </select>
    </>
  );
}
