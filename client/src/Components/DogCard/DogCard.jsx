import React from "react";

export function DogCard(props) {
// console.log(props.temperament)
  return (
    <>
      <ul key={props.id}>
        <h2>Nombre: {props.name}</h2>
        <h2>Breed: {props.breed_group}</h2>
        <h2>origen: {props.origin}</h2>
        <img src={props.image} alt={props.image} weight='120' height='120'/>
        <h3>Weigth: {props.minWeight} / {props.maxWeight}</h3>
        <h3>Heigth: {props.minHeight}  / {props.maxHeight}</h3>
        <h3>Temperamentos: {props.temperament}</h3>

      </ul>
      ;
    </>
  );
}
