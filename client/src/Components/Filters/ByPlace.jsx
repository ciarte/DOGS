import React from "react";
import { useDispatch } from "react-redux";
// import { filterTempsPlace } from "../../Redux/Actions";
import s from "../NavBar/navBar.module.css";

export default function ByPlace({ setCurrentPage,setFilterTC }) {
  // const allDogs = useSelector((state) => state.dogs);
  const dispatch = useDispatch();

  // function handlefilterDog(e) {
  //   dispatch(filterCreated(e.target.value));
  //   setCurrentPage(1);
  // }
  function handlefilterDog(e) {
    setFilterTC({origin:e.target.value});
     setCurrentPage(1);
   }
  return (
    <div>
      Place
      <div className={s.select}>
        <select onChange={(e) => handlefilterDog(e)}>
          <option value="all">All</option>
          <option value="created">Created</option>
          <option value="api">Api</option>
        </select>
      </div>
    </div>
  );
}


