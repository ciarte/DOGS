import React, { useState, useEffect } from "react";
import DogsList from "../DogList/DogList";
import {
  getDogs,
  getTemperaments,
  filterAtoZ,
} from "../../Redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pages/index.jsx";
import NavBar from "../NavBar/NavBar";
// import ByTemperamen from '../Filters/ByTemperamen'

export function Dogs() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const lastDogInPage = currentPage * pageSize;
  const firstDogInPage = lastDogInPage - pageSize;
  const currentDogs = allDogs.slice(firstDogInPage, lastDogInPage);
  const nPage = Math.ceil(allDogs.length / pageSize);
  const [order, setOrder] = useState("");


  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    dispatch(filterAtoZ());
  }, [dispatch]);

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <Pagination
        nPage={nPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <ul>
        {currentDogs &&
          currentDogs.map((d) => (
            <li key={d.id}>
              <DogsList
                id={d.id}
                name={d.name}
                image={d.image}
                breed_group={d.breed_group}
                origin={d.origin}
                temperament={d.temperament}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
