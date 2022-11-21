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
  dogsE:[],
  loading:true,
  dogDetailBackUp:{}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,   
        dogsE: action.payload,
        loading:false,
        details:{},
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
        dogDetailBackUp: action.payload
      };
    case GET_TEMP_ORIGIN:
      return {
        ...state,
        dogsE: action.payload,
        dogs: action.payload,
        loading:false,
        details:{}
      };
    case FILTER_ALFABETIC:
      const compare = function compare_lname(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }
      const DogsAZ = state.dogsE;
      const AtoZ = DogsAZ.sort(compare);
      console.log(AtoZ);
      return {
        ...state,
        dogsE: action.payload === "Asc" ? AtoZ : AtoZ.reverse(),
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
      return {
        ...state,
        dogsE: byWeight,
      };
    case BY_NAME:
      return {
        ...state,
        dogsE: action.payload,
        // dogs: action.payload,
        loading:false
      };
    default:
      return {
        ...state,
      };
  }
}
