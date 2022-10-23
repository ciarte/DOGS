const { Dog, Temperament } = require("../../db");
const axios = require("axios");

const getInfo = async () => {
  const url = await axios.get(`https://api.thedogapi.com/v1/breeds/`);
  const apiInfo = await url.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      height: dog.height.imperial,
      weight: dog.weight.imperial,
      life_span: dog.life_span,
      temperament: dog.temperament,
      img: dog.image.url,
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllInfo = async () => {
  const apiInfo = await getInfo();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

const getDogList = async (req, res, next) => {
  const breed = req.query.name;
  let allBreeds = await getAllInfo();
  try {
    if (breed) {
      let breedName = await allBreeds.filter((dog) =>
        dog.name.toLowerCase().includes(breed.toLowerCase())
      );
      breedName.length
        ? res.status(200).send(breedName)
        : res.status(404).send("We don`t Know this Breed of Dog, try again");
    } else {
      res.status(200).send(allBreeds);
    }
  } catch (error) {
    next(error);
  }
};

const getBreed = async (req, res, next) => {
  const { idRaza } = req.params;
  let allBreeds = await getAllInfo();
  try {
    const breed = await allBreeds.find((b) => b.id == idRaza);
    if (breed) {
      res.send(breed);
    } else {
      res.status(404).send("Wrong ID, check it and try again");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDogList,
  getBreed,
};
