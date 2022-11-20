import React from "react";
import { Link } from "react-router-dom";
import s from "./DogList.module.css";

export default function DogsList({
  id,
  name,
  breed_group,
  origin,
  temperament,
  image,
  minWeight,
  maxWeight,
}) {
  return (
    <div className={s.card}>
      <Link style={{ textDecoration: "none"}} to={`/details/${id}`}>
        <p style={{ margin: "-10px" }}>
          {origin ? <>{origin.substring(0, 38)}...</> : <>unknow</>}{" "}
        </p>
        <p className={s.title}>
          {name.length < 12 ? <>{name}</> : <>{name.substring(0, 10)}...</>}
        </p>
        <p className={s.subTitle}>
          {breed_group ? <>{breed_group}</> : <>Wild</>}
        </p>
        <div className={s.cardImage}>
          <img src={image} alt="dog.img" />
        </div>
        <div className={s.description}><br/>
          <span>
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
        <br/>Temperamentos:
          </span>
        </div>
        <div className={s.infoT}>
          	{temperament &&
								temperament
									.slice(0, 3)
									.map((t, i) => <span key={t}>{i === 2 ? t : t + ", "}</span>)}&hellip;
        </div>
      </Link>
    </div>
  );
}
