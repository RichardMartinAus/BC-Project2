// Model for ordering food

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class OrderType extends Model {}

OrderType.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ordType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "orderType",
  }
);

module.exports = OrderType;
