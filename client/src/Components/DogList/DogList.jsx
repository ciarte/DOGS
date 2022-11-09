import React from "react";
import { Link } from "react-router-dom";

export default function DogsList({
  id,
  name,
  breed_group,
  origin,
  temperament,
  image,
}) {
  return (
    <div>
      <div >DogsDetails</div>
      <div>
        Dog Name : <Link to={`/details/${id}`}> {name}</Link>
      </div>
      <img src={image} width="150" height="150" alt="dog.img" />
      <div>
        <br />
        <h4>temperament: </h4>{temperament && temperament.map((t) => 
                  <p>{t}</p>)}
        <h4>origin: </h4>{origin}
        <h4>breed_group: </h4>{breed_group}
      </div>
    </div>
  );
}
