const { Dog, Temperament } = require("../../db");
require("dotenv").config();
const axios = require("axios");
const { MY_URL } = process.env;

//All info from API
const getApiInfo = async () => {
  try {
    const { data } = await axios.get(MY_URL);
    return await data.map((dog) => {
      let temperamento = dog.temperament ? dog.temperament.split(", ") : "";
      let [minHeight, maxHeight] = dog.height.metric.split(" - ");
      let [minWeight, maxWeight] = dog.weight.metric.split(" - ");

      apiInfo = {
        id: dog.id,
        name: dog.name,
        minHeight: Number(minHeight),
        maxHeight: Number(maxHeight),
        minWeight: Number(minWeight),
        maxWeight: Number(maxWeight),
        life_span: Number(dog.life_span.split(" - ")[0]),
        breed_group: dog.breed_group,
        origin: dog.origin,
        temperament: temperamento,
        img: dog.image.url,
      };
      return apiInfo;
    });
  } catch (error) {
    next(error);
  }
};
//All info from DB
const getDbInfo = async () => {
  const dogs = await Dog.findAll({
    include: {
      model: Temperament,
      through: {
        attributes: [],
      },
    },
  });
  return dogs;
};
//All info from API-Temperaments
const getTemperament = async () => {
  const { data } = await axios.get(MY_URL);
  return await data.map((dog) => {
    let temperamentos = dog.temperament ? dog.temperament.split(", ") : [];
    apiTemp = {
      temperamentos,
    };
    return apiTemp;
  });
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getTemperament,
  // foundDog,
};
