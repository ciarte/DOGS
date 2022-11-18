const { Dog, Temperament } = require("../../db");
const axios = require("axios");
const { getDbInfo, getApiInfo } = require("./controllersCalls");

function compare_lname(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}
const getAllInfo = async () => {
  let values = Promise.all([getDbInfo(), getApiInfo()]);
  return (await values).flat().sort(compare_lname);
};

const getDogList = async (req, res, next) => {
  const breed = req.query.name;
  let allBreeds = await getAllInfo();
  allBreeds.sort(compare_lname);
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
      res.json(breed);
    } else {
      res.status(404).send("Wrong ID, check it and try again");
    }
  } catch (error) {
    next(error);
  }
};


//POST adding dog
const addDog = async ({
  name,
  minHeight,
  maxHeight,
  minWeight,
  maxWeight,
  life_span,
  breed_group,
  image,
  temperament,
}) => {
  name = (name.charAt(0).toUpperCase() + name.slice(1)).trim();
  const newDog = await Dog.create({
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    life_span,
    breed_group,
    image,
  });
  if (temperament) {
    temperament.map(async (t) => {
      const tempName = await Temperament.findOne({
        attributes: ["id"],
        where: { name: t },
      });
      await newDog.addTemperaments(tempName);
    });
  } else {
    temperament = [];
  }
  return newDog;
};

const postDogs = async (req, res) => {
  const {
    name,
    minHeight,
    maxHeight,
    minWeight,
    maxWeight,
    life_span,
    breed_group,
    temnperament,
  } = req.body;
  if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight) {
    res.status(400).send("Complete all required fields");
  }
  try {
    const response = await addDog(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ message: "Name already exist", error });
  }
};


module.exports = {
  getDogList,
  getBreed,
  postDogs,
  getAllInfo
};
