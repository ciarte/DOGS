import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDetails } from "../../Redux/Actions/index";
import { DogCard } from "../DogCard/DogCard";
import s from "../NavBar/navBar.module.css";
export function DogDetail(props) {
  const idDog = props.match.params.id;

  const dispatch = useDispatch();
  const dogDetail = useSelector((state) => state.details);
  console.log(dogDetail);

  React.useEffect(() => {
    dispatch(getDetails(idDog));
  }, [dispatch, idDog]);

  return (
    <div>
        <nav className={s.wrapper}>
          <a href="http://localhost:3000/home" style={{height:'56px'}}>BACK</a>
        </nav>
      {dogDetail ? (
        <>
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
        </>
      ) : (
        <div>h</div>
      )}
    </div>
  );
}
