import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  CREATE_DOG,
  DOG_DETAIL,
  // FILTER_DOG,
  BY_NAME,
  // FILTER_DOG_CREATED,
  FILTER_ALFABETIC,
  BY_WEIGHT,
  GET_TEMP_ORIGIN,
} from "../Actions";

const initialState = {
  dogs: [],
  details: {},
  temperaments: [],
  dogsE:[]
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,     
        dogsE: action.payload
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case CREATE_DOG:
      return {
        ...state,
      };
    case DOG_DETAIL:
      return {
        ...state,
        details: action.payload,
      };
    case GET_TEMP_ORIGIN:
      return {
        ...state,
        dogsE: action.payload,
      };
    // case FILTER_DOG:
    //   const allDogs = state.dogsNames;
    //   const statusFilter =
    //     action.payload === "all"
    //       ? allDogs
    //       : allDogs.filter((e) => e.temperament.includes(action.payload));
    //   return {
    //     ...state,
    //     dogs: statusFilter,
    //   };
    // case FILTER_DOG_CREATED:
    //   const Dogs = state.dogs;
    //   const created =
    //     action.payload === "created"
    //       ? Dogs.filter((e) => e.id.toString().length > 5)
    //       : Dogs.filter((e) => e.id.toString().length < 5);
    //   return {
    //     ...state,
    //     dogs: action.payload === "all" ? Dogs : created,
    //   };
    case FILTER_ALFABETIC:
      const DogsAZ = state.dogsE;
      const AtoZ = DogsAZ.reverse();
      console.log(AtoZ);
      return {
        ...state,
        dogsE: action.payload === "Asc" ? DogsAZ : AtoZ,
      };
    case BY_WEIGHT:
      const DogsWeight = state.dogsE;
      const byWeight =
        action.payload === "Asc"
          ? DogsWeight.sort(function (a, b) {
              return a.minWeight - b.minWeight;
            })
          : DogsWeight.sort(function (a, b) {
              return b.maxWeight - a.maxWeight;
            });
            console.log(byWeight)
      return {
        ...state,
        dogsE: byWeight,
      };
    case BY_NAME:
      return {
        ...state,
        dogs: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
