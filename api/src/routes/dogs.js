const { Router } = require("express");
const router = Router();
const { getDogList, getBreed } = require("./controllers/controllers");

router.get("/", getDogList);

router.get("/:idRaza", getBreed);

module.exports = router;
