import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByName } from "../../Redux/Actions/index.js";


export default function ByName(props){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  
function findMatch(props) {
  return cities.filter(place => {
    const regex =new RegExp (citySearch,'gi');
    return place.city.match(regex) || place.state.match(regex)
  })
}
  return (
    <>
    <form class="search-form">
    <input type="text" class="search" placeholder="City or State"/>
    <ul class="suggestions">
      <li>Filter for a Dog</li>
      <li>or origin</li>
    </ul>
  </form>
    </>
  )
  }


  
// function findMatch(citySearch, cities) {
//   return cities.filter(place => {
//     const regex =new RegExp (citySearch,'gi');
//     return place.city.match(regex) || place.state.match(regex)
//   })
// }
// function displayMatch(){
// const match = findMatch(this.value,cities)
// const html = match.map( place => {
//   const regex = new RegExp(this.value, 'gi');
//   console.log(place)
//   const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//   const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//   <li>
//   <span class='name'>${cityName}, ${stateName}</span>
//   </li>
//   `;
// }).join('');
// suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change',displayMatch)
// searchInput.addEventListener('keyup',displayMatch)