const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dog",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      //altura
      minHeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxHeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      //peso
      minWeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxWeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      life_span: {
        type: DataTypes.INTEGER,
        defaultValue: 13,
      },
      image: {
        type: DataTypes.STRING,
      },
      breed_group: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
