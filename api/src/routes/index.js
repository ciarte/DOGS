const { Router } = require("express");
// Importar todos los routers;
const dogRoute = require("./dogs");
const temperamentRoute = require("./temperaments");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/dogs", dogRoute);
router.use("/temperaments", temperamentRoute);

module.exports = router;
