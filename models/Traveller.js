const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Traveller extends Model {}

Traveller.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller",
  }
);

module.exports = Traveller;
