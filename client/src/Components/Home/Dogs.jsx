import React, { useState, useEffect } from "react";
import DogsList from "../DogList/DogList";
import {
  getDogs,
  getTemperaments,
} from "../../Redux/Actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pages/index.jsx";
import NavBar from "../NavBar/NavBar";
import s from './Dogs.module.css'
import Loading from "../LoadingPage/Loading";

export function Dogs() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogsE);
 const loading = useSelector((state)=> state.loading)


  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(8);
  const lastDogInPage = currentPage * pageSize;
  const firstDogInPage = lastDogInPage - pageSize;
  const currentDogs =allDogs.slice(firstDogInPage, lastDogInPage);
  const nPage = Math.ceil(allDogs.length / pageSize);
  const [order, setOrder] = useState("");
  const [maxPageLimit, setMaxPageLimit] = useState(25);
  const [minPageLimit, setMinPageLimit] = useState(0);
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
    // dispatch(filterAtoZ());
  }, [dispatch]);

  return (
    <>
     {loading?
     (<><Loading/> <header>
     <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder}  />
   </header></> ):
       <div style={{backgroundColor:'#f9c74f'}}>
      <header>
        <NavBar setCurrentPage={setCurrentPage} setOrder={setOrder}  />
      </header> 
      <br/>
      <div className={s.background}>
        <br/>
      <Pagination
        nPage={nPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        />
      
       <div className={s.container}> 
       {currentDogs.map((d) => (
         <div >
            <DogsList
              id={d.id}
              name={d.name}
              image={d.image}              
              minWeight={d.minWeight}
              maxWeight={d.maxWeight}
              temperament={d.temperament}
            />
          </div>))}
          </div>
        </div>
 <Pagination
      nPage={nPage}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      setMinPageLimit={setMinPageLimit}
      minPageLimit={minPageLimit}
      setMaxPageLimit={setMaxPageLimit}
      maxPageLimit={maxPageLimit}
      setOrder={setOrder}
    /></div>
       }</>
  );
}
