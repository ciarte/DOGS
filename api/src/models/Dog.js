const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
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
      origin: {
        type: DataTypes.STRING,
        defaultValue: "Unknow",
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
      //raza
      breed_group: {
        type: DataTypes.STRING,
        defaultValue: "Unknow",
      },
      createDB: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },

    {
      timestamps: false,
    }
  );
};
