// Model for ordering food

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order extends Model {}

Order.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderDate: {
    type: DataTypes.DATE,
    allowNull: false,
    autoIncrement: true,
  },
  OrderTypeid: {
    type: DataTypes.INTEGER,
    references: {
      model: "OrderType",
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
  total : {
    type: DataTypes.DECIMAL,
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "order",
});

module.exports = Order;
