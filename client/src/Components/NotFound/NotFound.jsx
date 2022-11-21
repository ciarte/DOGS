import React from "react";
import { Link } from "react-router-dom";
import error from "../../img/dribble_error-dog.gif";
import s from '../NotFound/NotFound.module.css'
export function NotFound() {
  return (
    <div className={s.container}>
      <div className={s.divCont}>
        <img className={s.imgError} src={error} alt="Error" />
        <div className={s.buttonCreate}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/home">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}