const { Dog, Temperament } = require("../../db");
const axios = require("axios");
const { getDbInfo, getApiInfo } = require("./controllersCalls");

const getAllInfo = async () => {
  let values = Promise.all([getDbInfo(), getApiInfo()]);
  return (await values).flat();
};

const getDogList = async (req, res, next) => {
  const breed = req.query.name;
  let allBreeds = await getAllInfo();
  try {
    if (breed) {
      let breedName = allBreeds.filter((dog) =>
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
    const breed = await allBreeds.find(
      (b) => b.id.toString() === idRaza.toString()
    );
    if (breed) {
      res.send(breed);
    } else {
      res.status(404).send("Wrong ID, check it and try again");
    }
  } catch (error) {
    res.status(400).send("Wrong ID, check it and try again");
  }
};

const addDog = async ({
  name,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  life_span,
  breed_group,
  img,
  temperaments,
}) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const newDog = await Dog.create({
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    life_span,
    breed_group,
    img,
  });
  temperaments.length
    ? temperaments.map(async (t) => {
        const tempName = await Temperament.findOne({
          attributes: ["id"],
          where: { name: t },
        });
        await newDog.addTemperaments(tempName);
      })
    : [];
  return newDog;
};

const postDogs = async (req, res, next) => {
  const { name, minHeight, maxHeight, minWeight, maxWeight, temnperaments } =
    req.body;
  if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight) {
    res.status(400).send("Complete all required fields");
  }
  try {
    const founded = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    if (founded.data) {
      res.send("the dog already exist");
    }
  } catch (dog) {
    const response = await addDog(req.body);
    res.status(200).send(response);
  }
};
module.exports = {
  getDogList,
  getBreed,
  postDogs,
};
