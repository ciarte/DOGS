import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {getDetails } from "../../Redux/Actions/index";
import { DogCard } from "../DogCard/DogCard";

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
      {dogDetail ? (
        <div>
          <h2>DogsDetails</h2>
          <h3>
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
          </h3>
        </div>
      ) : (
        <div>h</div>
      )}
    </div>
  );
}
