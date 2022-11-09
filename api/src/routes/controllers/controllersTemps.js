const { Temperament } = require("../../db");
const { getTemperament } = require("./controllersCalls");

const getTemperamentList = async (req, res, next) => {
  let allTemperament = await getTemperament();
  let arrayString = allTemperament.flat();
  let todos = [...new Set(arrayString)].sort();
  todos.map(async (t) => {
    await Temperament.findOrCreate({
      where: { name: t },
    });
  });
  res.json(await Temperament.findAll());
};

module.exports = {
  getTemperamentList,
};
