const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    //altura
    heigth: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    //peso
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lifeSpan: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
    },
  });
};
