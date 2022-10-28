const { Router } = require("express");
const { getTemperamentList } = require("../controllers/controllersTemps");

require("dotenv").config();

const router = Router();

router.get("/", getTemperamentList);

module.exports = router;
