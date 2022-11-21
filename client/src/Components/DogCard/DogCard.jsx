import React from "react";
import s from "./DogCard.module.css";
export function DogCard(props) {
  return (
    <div className={s.back}>
      <div className={s.background} key={props.id}>
        <div className={s.box}>
          <div className={s.imgContainer}>
            <div className={s.imgInner}>
              <div className={s.innerSkew}>
                <img  src={props.image} alt={props.image} />
              </div>
            </div>
          </div>
          <div className={s.textContainer}>
            <h3 className={s.title}>{props.name}</h3>
            <h3 className={s.subtitle}>
              {props.breed_group ? <>{props.breed_group}</> : <>Wild/Unknown</>}
            </h3>
            <h3 className={s.title}>Origen: </h3>
            {props.origin ? (
              <h3 className={s.subtitle}>{props.origin}</h3>
            ) : (
              <h3 className={s.subtitle}>Unknown</h3>
            )}
            <h3 className={s.title}>
              Weight:
              {props.minWeight ? (
                props.maxWeight ? (
                  <>
                    {" " + props.minWeight} - {props.maxWeight + " Kg"}
                  </>
                ) : (
                  <>{" " + props.minWeight + " Kg"}</>
                )
              ) : props.maxWeight ? (
                <>{" " + props.maxWeight + " Kg"}</>
              ) : (
                <> unknown</>
              )}
            </h3>
            <h3 className={s.title}>
              Heigth:
              {props.minHeight ? (
                props.maxHeight ? (
                  <>
                    {" " + props.minHeight} / {props.maxHeight + " cm"}
                  </>
                ) : (
                  <>{" " + props.minHeight + " cm min."}</>
                )
              ) : props.maxHeight ? (
                <>{" " + props.maxHeight + " cm max."}</>
              ) : (
                <> unknown</>
              )}
            </h3>

            <h3 className={s.subtitle}>
              {props.temperament &&
                props.temperament.map((t) => <>{t + ", "}</>)}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
