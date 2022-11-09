import {
  GET_DOGS,
  GET_TEMPERAMENTS,
  CREATE_DOG,
  DOG_DETAIL,
  FILTER_DOG,
  BY_NAME,
  FILTER_DOG_CREATED,
  FILTER_ALFABETIC,
} from "../Actions";

const initialState = {
  dogs: [],
  details: {},
  dogsNames: [],
  temperaments: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return {
        ...state,
        dogs: action.payload,
        dogsNames: action.payload,
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
            case FILTER_DOG:
              const allDogs = state.dogsNames;
              const statusFilter =
              action.payload === "all"
              ? allDogs
              : allDogs.filter((e) => e.temperament.includes(action.payload));
              console.log(statusFilter);
              return {
                ...state,
                dogs: statusFilter,
              };
              case FILTER_DOG_CREATED:
                const Dogs = state.dogsNames;
                const created =
                action.payload === "created"
                ? Dogs.filter((e) => e.id.toString().length > 5)
                : Dogs.filter((e) => e.id.toString().length < 5);
                return {
                  ...state,
                  dogs: action.payload === "all" ? Dogs : created,
                };
                case FILTER_ALFABETIC:
                  const DogsAZ = state.dogs;
                  const AtoZ = DogsAZ.reverse()
                  console.log(AtoZ);
                  return {
                    ...state,
                    dogs: action.payload === 'Asc'? DogsAZ : AtoZ
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
