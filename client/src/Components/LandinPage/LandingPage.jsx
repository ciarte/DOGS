import React from "react";
import { Link } from "react-router-dom";
import s from './landingPage.module.css';
export function LandingPage() {
  return (
    <div className={s.landing}>
      <button className={s.landingBoton}> 
        <Link to='/home' className={s.links}>DOG ME</Link></button>
    </div>
  );
}
