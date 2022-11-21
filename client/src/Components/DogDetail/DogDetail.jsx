import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../Redux/Actions/index";
import { DogCard } from "../DogCard/DogCard";
import { NavLink } from "react-router-dom";
import s from "../NavBar/navBar.module.css";
import Loading from "../LoadingPage/Loading";

export function DogDetail(props) {
  const idDog = props.match.params.id;

  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.details);
  console.log(dogDetail);
  React.useEffect(() => {
    dispatch(getDetails(idDog))
  }, [dispatch, idDog]);
  return (
    <div className={s.back}>
      <nav className={s.wrapper}>
        <NavLink style={{ height: "56px", marginTop: "20px" }} to={"/home"}>
          BACK
        </NavLink>
        <NavLink
          style={{ height: "56px", marginTop: "20px" }}
          to={"/createDogs"}
        >
          GO TO CREATE DOG
        </NavLink>
      </nav>
      <div
        style={{
          backgroundRepeat: "no-repeat",
          width: "0px",
          height: "48.5em",
        }}
      >
        {dogDetail ? (
          <div>
            <DogCard
              id={dogDetail.id}
              name={dogDetail.name}
              breed_group={dogDetail.breed_group}
              image={dogDetail.image}
              minHeight={dogDetail.minHeight}
              maxHeight={dogDetail.maxHeight}
              minWeight={dogDetail.minWeight}
              maxWeight={dogDetail.maxWeight}
              life_span={dogDetail.life_span}
              origin={dogDetail.origin}
              temperament={dogDetail.temperament}
            />
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
