const { Router } = require("express");
const router = Router();
const {
  getDogList,
  getBreed,
  postDogs,
} = require("../controllers/controllersDog");

router.get("/", getDogList);

router.get("/:idRaza", getBreed);

router.post("/", postDogs);

module.exports = router;
