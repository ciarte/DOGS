import React from "react";
import s from "./DogCard.module.css";
export function DogCard(props) {
  // console.log(props.temperament)
  return (
    <> 
    
      <div  className={s.background} key={props.id}>
      <h2 className={s.title}>{props.name}</h2>
        <h2 className={s.subtitle}>{props.breed_group}</h2>
        <h2 className={s.info}>Origen: </h2>
        {props.origin ? <h4 className={s.subtitle}>{props.origin}</h4> : <h4 className={s.subtitle}>Unknow</h4>}
        <h3 className={s.subtitle}>
          Weigth: {props.minWeight} / {props.maxWeight}
        </h3>
        <h3 className={s.subtitle}>
          Heigth: {props.minHeight} / {props.maxHeight}
        </h3>
        <h3 className={s.info}>
          {props.temperament &&
            props.temperament.map((t) => (
                < >
                  {t+', '}
                </>
            ))}
        </h3>
          </div><div className={s.image}><img className={s.imgs} src={props.image} alt={props.image} /></div>
    </>
  );
}
