import React from "react";
import { Link } from "react-router-dom";
import s from "./DogList.module.css";

export default function DogsList({
  id,
  name,
  temperament,
  image,
  minWeight,
  maxWeight,
}) {
  return (
    <div className={s.card}>
      <Link style={{ textDecoration: "none" }} to={`/details/${id}`}>
        <div className={s.description}>
          Weight:
          {minWeight ? (
            maxWeight ? (
              <>
                {" " + minWeight} - {maxWeight + " Kg"}
              </>
            ) : (
              <>{" " + minWeight + " Kg"}</>
            )
          ) : maxWeight ? (
            <>{" " + maxWeight + " Kg"}</>
          ) : (
            <> unknown</>
          )}
        </div>
        <p className={s.title}>
          {name.length < 12 ? <>{name}</> : <>{name.substring(0, 10)}...</>}
        </p>
        <div className={s.cardImage}>
          <img src={image} alt="dog.img" />
        </div>
        <br />
        <div className={s.infoT}>
          <span>Temperamentos: </span>
          <br />
          {temperament &&
            temperament
              .slice(0, 3)
              .map((t, i) => <span key={t}>{i === 2 ? t : t + ", "}</span>)}
          &hellip;
        </div>
      </Link>
    </div>
  );
}
