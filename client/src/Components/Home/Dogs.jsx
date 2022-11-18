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
import s from './Dogs.module.css'

export function Dogs() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsE);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const lastDogInPage = currentPage * pageSize;
  const firstDogInPage = lastDogInPage - pageSize;
  const currentDogs =allDogs.slice(firstDogInPage, lastDogInPage);
  const nPage = Math.ceil(allDogs.length / pageSize);
  const [order, setOrder] = useState("");
 
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    dispatch(filterAtoZ());
  }, [dispatch]);

  return (
    <>
      <header>
        <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder}  />
      </header>
      <Pagination
        nPage={nPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {currentDogs.length?
       <div> {currentDogs.map((d) => (
          <div className={s.cards}>
            <DogsList
              id={d.id}
              name={d.name}
              image={d.image}
              breed_group={d.breed_group}
              origin={d.origin}
              minWeight={d.minWeight}
              maxWeight={d.maxWeight}
              temperament={d.temperament}
            />
          </div>))}
          </div>: <h1>NoSE encontsoh</h1>
        }
      <Pagination
        nPage={nPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
