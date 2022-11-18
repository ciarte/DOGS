const { Dog, Temperament } = require("../../db");
require("dotenv").config();
const axios = require("axios");
const { MY_URL } = process.env;

//All info from API
const getApiInfo = async () => {
  const { data } = await axios.get(MY_URL);
  return await data.map((dog) => {
    let temperamento = dog.temperament ? dog.temperament.split(", ") : "";
    let [minHeight, maxHeight] = dog.height.metric.split(" - ");
    let [minWeight, maxWeight] = dog.weight.metric.split(" - ");

    apiInfo = {
      id: dog.id,
      name: dog.name,
      origin: dog.origin,
      minHeight: Number(minHeight),
      maxHeight: Number(maxHeight),
      minWeight: Number(minWeight),
      maxWeight: Number(maxWeight),
      life_span: Number(dog.life_span.split(" - ")[0]),
      breed_group: dog.breed_group,
      temperament: temperamento,
      image: dog.image.url,
    };
    return apiInfo;
  });
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
  if (dogs.length) {
    const dbData = await dogs.map((d) => {
      const tempArray = d.temperaments.map((t) => t.name);
      field = d.dataValues;
      dataDogs = {
        id: field.id,
        name: field.name,
        origin: field.origin,
        minHeight: field.minHeight,
        maxHeight: field.maxHeight,
        minWeight: field.minWeight,
        maxWeight: field.maxWeight,
        life_span: field.life_span,
        breed_group: field.breed_group,
        temperament: tempArray,
        image: field.image,
        createDB: field.createDB
      };
      return dataDogs;
    });
    return dbData;
  } else {
    return [];
  }
};
//All info from API-Temperaments
const getTemperament = async () => {
  const { data } = await axios.get(MY_URL);
  return await data.map((dog) => {
    let temperamentos = dog.temperament ? dog.temperament.split(", ") : [];
    return temperamentos;
  });
};
module.exports = {
  getApiInfo,
  getDbInfo,
  getTemperament,
};
