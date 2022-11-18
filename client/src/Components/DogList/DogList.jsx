import React from "react";
import { Link } from "react-router-dom";
import s from './DogList.module.css'

export default function DogsList({
  id,
  name,
  breed_group,
  origin,
  temperament,
  image,
  minWeight,
  maxWeight
}) {
  return (
    <div className={s.card}>
      <Link to={`/details/${id}`}>
        <div className={s.cardInfo}>
          <p className={s.title}>Dog Name : {name}</p> 
          <p className={s.subTitle}>{breed_group}</p>
        </div>
        <img className={s.cardImage} src={image} width="150" height="150" alt="dog.img" />
        <div className={s.description}>
          <p>origin:{origin ? <p>{origin}</p> : <p>Unknow</p>}</p>
          <p>Weight: 
            {minWeight? 
              maxWeight? 
                <p>{minWeight} - {maxWeight+' Kg'}</p>:
                  <p>{minWeight+' Kg'}</p>:
                  maxWeight?
                    <p>{maxWeight+' Kg'}</p>:
                      <p>knowless</p> }
                        </p>
          <p>temperament: </p>{temperament && temperament.map((t) => 
            <p>{t}</p>)}
        </div> 
      </Link>
    </div>
  );
}
