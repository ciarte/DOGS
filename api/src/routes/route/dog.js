const { Router } = require("express");
const router = Router();
const {
  getDogList,
  getBreed,
  postDogs,
  getNames
} = require("../controllers/controllersDog");

router.get("/", getDogList);

router.get('/detalle',getNames)

router.get("/:idRaza", getBreed);

router.post("/", postDogs);

module.exports = router;
