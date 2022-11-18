const filtradoTe = async (temp, raza) => {
  if(temp ==='all'){
    return raza
  }else 
  return raza.filter((dog) => dog.temperament.includes(temp));
};

const filtradoPlace = async (place, any) => {
  if (place === "api") {
    return any.filter((e) => !e.createDB);
  }
  if (place === "created") {
    return any.filter((e) => e.createDB);
  }
  if (place === "all") return any;
};
module.exports = {
  filtradoTe,
  filtradoPlace,
};
