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

export function getDogs() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: GET_DOGS,
      payload: json.data,
    });
  };
}
export function getTemperaments() {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/temperaments`);
    return dispatch({
      type: GET_TEMPERAMENTS,
      payload: json.data,
    });
  };
}
export function createDogs(payload) {
  return async function (dispatch) {
    let newDog = await axios.post("http://localhost:3001/dogs/", payload);
    console.log(newDog);
    return newDog;
  };
}
export function getDetails(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/dogs/${id}`);
    return dispatch({
      type: DOG_DETAIL,
      payload: json.data,
    });
  };
}
export function filterTemps(payload) {
  console.log(payload);
  return{
    type: FILTER_DOG,
    payload,
  };
}
export function filterCreated(payload) {
  console.log(payload);
  return{
    type: FILTER_DOG_CREATED,
    payload,
  };
}
export function filterAtoZ(payload) {
  console.log(payload);
  return{
    type: FILTER_ALFABETIC,
    payload,
  };
}
export function filterByName(payload) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/dogs?name=${payload}`);
    console.log(json.data)
    return dispatch({
      type: BY_NAME,
      payload: json.data,
    });
  };
}



// export function clearDetail(){
//   return{
//     type: CLEAR_DETAIL,
//   }
// }

// export function filterDogs(name) {
//   return async function (dispatch) {
//     let json = await axios.get(`http://localhost:3001/dogs?name=${name}`);
//     console.log(json.data)
//     return dispatch({
//       type: FILTER_DOG,
//       payload: json.data,
//     });
//   };
// }
