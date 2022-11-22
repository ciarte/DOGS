import axios from "axios";

export const GET_DOGS = "GET_DOGS";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const CREATE_DOG = "CREATE_DOG";
export const DOG_DETAIL = "DOG_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const FILTER_DOG = "FILTER_DOG";
export const FILTER_DOG_CREATED = "FILTER_DOG_CREATED";
export const FILTER_ALFABETIC = "FILTER_ALFABETIC";
export const BY_NAME = "BY_NAME";
export const BY_WEIGHT = "BY_WEIGHT";
export const GET_TEMP_ORIGIN = "GET_TEMP_ORIGIN";

export function getDogs() {
  return async function (dispatch) {
    let json = await axios.get("/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
  
    });
  };
}
export function getTemperaments() {
  return async function (dispatch) {
    let json = await axios.get(`/temperaments`);
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}
export function createDogs(payload) {
  return async function (dispatch) {
    try {
      let { data: newDog } = await axios.post(
        "/dogs/",
        payload
      );
      alert(`Your dog: ${newDog.name} its ready`);  
    } catch (error) {
      const message = error.response
        ? error.response.data
          ? `The name "${payload.name}" already exists!`
          : error.response.data
        : error.message;
      alert(message);
    }
  };
}

export function getDetails(id) {
  return async function (dispatch) {
    let json = await axios.get(`/dogs/${id}`);
    return dispatch({
      type: DOG_DETAIL,
      payload: json.data,
    });
  };
}
export function filterTempsPlace(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.get(
        `/temperaments/search?temperament=${payload.temp}&place=${payload.origin}`
      );console.log(json)
      if(json.data.length){
      return dispatch({
        type: GET_TEMP_ORIGIN,
        payload: json.data,
      })}else{
        alert(`Dogs not found, try another filter`);
      }
    } catch (error) {
      console.log(error.response.data);
      alert(`Dogs not found, try another filter`);
    }
  };
}

export function filterTemps(payload) {
  return {
    type: FILTER_DOG,
    payload,
  };
}
export function filterWeight(payload) {
  return {
    type: BY_WEIGHT,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_DOG_CREATED,
    payload,
  };
}
export function filterAtoZ(payload) {
  return {
    type: FILTER_ALFABETIC,
    payload,
  };
}
export function filterByName(payload) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/dogs?name=${payload}`);
      return dispatch({
        type: BY_NAME,
        payload: json.data,
      });
    } catch (error) {
      console.log(error.response.data);
      alert(`Dog not found, try another name`);
    }
  };
}
