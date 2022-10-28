const { Router } = require("express");
// Importar todos los routers;
const dogRoute = require("./route/dog");
const temperamentRoute = require("./route/temperament");
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/dogs", dogRoute);
router.use("/temperaments", temperamentRoute);

module.exports = router;
