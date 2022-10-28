const { Dog, Temperament } = require("../../db");
const { getTemperament } = require("./controllersCalls");

const getTemperamentList = async (req, res, next) => {
  let allTemperament = await getTemperament();
  let arrayProp = allTemperament.map((e) =>
    Object.keys(e).map((key) => e[key])
  );
  let arrayString = arrayProp.flat(Infinity);
  let todos = [...new Set(arrayString)].sort();
  const bulk = todos.map((t, i) => {
    return { name: t };
  });
  const temperInDb = await Temperament.bulkCreate(bulk);
  res.send(temperInDb);
};

module.exports = {
  getTemperamentList,
};
// "Watchful", "Wild"
