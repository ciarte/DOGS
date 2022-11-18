import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByName } from "../../Redux/Actions/index.js";

export default function ByName({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleFindMatch(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(filterByName(name));
    setCurrentPage(1);
    setName("")
  }
  return (
    <div><button type="submit" onClick={(e) => handleSubmit(e)}>Search by Name
        </button>
      <form>
        <input
        value={name}
          type="text"
          placeholder="Dog or Origin...."
          onChange={(e) => handleFindMatch(e)}
        />
        
      </form>
    </div>
  );
}
