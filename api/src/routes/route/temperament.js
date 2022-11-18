const { Router } = require("express");
const { Temperament } = require("../../db");
const {
  filtradoTe,
  filtradoPlace,
} = require("../controllers/controllersTemps");
const { getTemperament } = require("../controllers/controllersCalls");
const { getAllInfo } = require("../controllers/controllersDog");
require("dotenv").config();

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    let allTemperament = await getTemperament();
    let arrayString = allTemperament.flat();
    let todos = [...new Set(arrayString)].sort();
    todos.map(async (t) => {
      await Temperament.findOrCreate({
        where: { name: t },
      });
    });
    res.json(await Temperament.findAll());
  } catch (error) {
    next(error);
  }
});

router.get("/search", async (req, res, next) => {
  var temp = req.query.temperament;
  var place = req.query.place;
  let allBreeds = await getAllInfo();
  try {

    if  (!temp && place)  {
      temp = 'all';
      let breedTemp = await filtradoTe(temp, allBreeds);
      let book = await filtradoPlace(place,breedTemp)
        res.status(200).send(book);
      console.log(book.length,'no alls')
    } 
    if (temp !=="all" && place)  {
      let breedTemp = await filtradoTe(temp, allBreeds);
      let book = await filtradoPlace(place,breedTemp)
        res.status(200).send(book);
      console.log(book.length,'no alls')
    } 
    if(temp !=="all" && !place){
      place = 'all';
    let breedTemp = await filtradoTe(temp, allBreeds);
    let book = await filtradoPlace(place,breedTemp)
     res.status(200).send(book);
   console.log(book.length,'no alls2')
     } 
     if (temp === "all" && place ){
      temp= "all"
      let breedTemp = await filtradoTe(temp, allBreeds);
      let book2 = await filtradoPlace(place,breedTemp)
      console.log(book2.length, 'all one')
      res.status(200).send(book2);
    }
    if(temp==='all' && !place){
      res.status(200).send(allBreeds);
      console.log(allBreeds.length,'todos')
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
