import React from "react";

export default function Pagination({ nPage, currentPage, setCurrentPage }) {
  const nexPage = () => {
    if (currentPage !== nPage) {
      console.log(currentPage, nPage);
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul>
        <li>
          <a onClick={prevPage}>Prev</a>
        </li>

        <li key={currentPage}>
          <a onClick={() => setCurrentPage(currentPage)} >
            <h2>
              {currentPage} / {nPage}
            </h2>
          </a>
        </li>

        <li>
          <a onClick={nexPage}>Next</a>
        </li>
      </ul>
    </nav>
  );
}
