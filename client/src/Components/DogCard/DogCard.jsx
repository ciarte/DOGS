import React from "react";

export function DogCard(props) {
  // console.log(props.temperament)
  return (
    <>
      <div key={props.id}>
        <label><h2>Nombre: {props.name}</h2></label>
        <h2>Breed: {props.breed_group}</h2>
        <h2>Origen: </h2>
        {props.origin ? <h4>props.origin</h4> : <h4>Unknow</h4>}
        <img src={props.image} alt={props.image} weight="120" height="120" />
        <h3>
          Weigth: {props.minWeight} / {props.maxWeight}
        </h3>
        <h3>
          Heigth: {props.minHeight} / {props.maxHeight}
        </h3>
        <h3>
          Temperamentos:
          {props.temperament &&
            props.temperament.map((t) => (
              <label>
                <br />
                <span style={{ color: "red" }} key={t}>
                  {t}
                </span>
              </label>
            ))}
        </h3>
      </div>
    </>
  );
}
