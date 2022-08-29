// Model for ordering food

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order extends Model {}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      allowNull: false,
         },
    OrderTypeid: {
      type: DataTypes.INTEGER,
      references: {
        model: "orderType",
        key: "id",
      },
    },
    Userid: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    total: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Orders",
  }
);

module.exports = Order;
