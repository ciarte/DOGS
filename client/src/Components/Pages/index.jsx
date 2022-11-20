import React, { useState } from "react";
import s from "../Pages/pages.module.css";
export default function Pagination({ nPage,setOrder, currentPage, setCurrentPage,setMaxPageLimit, setMinPageLimit,maxPageLimit,minPageLimit }) {
  const pages = [];
  for (let i = 1; i <= nPage; i++) {
    pages.push(i);
  }
  const pageNumberLimit = nPage;
  // const [loading, setLoading] = useState(true);
 

  const nexPage = () => {
    if (currentPage < nPage) {
      if (currentPage + 1 > maxPageLimit) {
        setMaxPageLimit(maxPageLimit + pageNumberLimit);
        setMinPageLimit(minPageLimit + pageNumberLimit);
      }
      setCurrentPage(currentPage + 1);
    }
  };
  // const nexPage = () => {
  //   if (currentPage !== nPage) {
  //     console.log(currentPage, nPage);
  //     setCurrentPage(currentPage + 1);
  //   }
  // };
  const prevPage = () => {
    if (currentPage > pages[0]) {
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setMaxPageLimit(maxPageLimit - pageNumberLimit);
        setMinPageLimit(minPageLimit - pageNumberLimit);
      }
      setCurrentPage(currentPage - 1);
    }
  };
  // const prevPage = () => {
  //   if (currentPage !== 1) setCurrentPage(currentPage - 1);
  // };
  
// page ellipses TODO
let pageIncrementEllipses = null;
if(pages.length > maxPageLimit){
    pageIncrementEllipses = <>&hellip;</>
}
let pageDecremenEllipses = null;
if(minPageLimit >=1){
    pageDecremenEllipses = <>&hellip;</> 
}
  return (
    <><div className={s.space}></div>
    <nav className={s.Pagination}>
      <button className={s.select} onClick={prevPage} disabled={currentPage === pages[0]}>
        Prev
      </button>
      <div className={s.hellip}>{pageDecremenEllipses}</div>
      {maxPageLimit ? pages.map((p) => {
        if (p <= maxPageLimit && p > minPageLimit) {
          return (
            <button className={s.select}key={p} onClick={() => setCurrentPage(p)}>
              <>{p}</>
            </button>
          );
        } 
      }): <button className={s.select}>{currentPage+' / '+nPage}</button>}
      <div className={s.hellip}>{pageIncrementEllipses}</div>
      <button className={s.select} onClick={nexPage} disabled={currentPage === pages[pages.length - 1]}>
        Next
      </button>
    </nav></>
  );
}
