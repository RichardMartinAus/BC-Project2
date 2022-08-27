// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const User = require("./User");
const OrderType = require("./OorderType");
const Order = require("./Order");
const products = require("./products");
const Booking = require("./Booking");
const OrderProduct = require("./OrderProduct");

// .hasOne(User, { foreignKey: 'driver_id',
//             // When we delete a Driver, make sure to also delete the associated License.
//             onDelete: 'CASCADE',
//           });

//           // We can also define the association starting with License
//           License.belongsTo(Driver, {
//             foreignKey: 'driver_id',
//           });

//relation ship between booking and user
User.hasMany(Booking, { foreignKey: "Userid" });
Booking.belongsTo(User, { foreignKey: "Userid" });

//relation ship between order and ordertype
Order.hasOne(OrderType, { foreignKey: "OrderTypeid" });
OrderType.belongsTo(Order, { foreignKey: "OrderTypeid" });

//relation ship between order and User table
Order.belongsTo(User, { foreignKey: "Userid" });
User.hasMany(Order, { foreignKey: "Userid" });

//relation ship between order and Products
Order.belongsToMany(products, {
  through: {
    model: OrderProduct,
    foreignkey: "orderId",
  },
});
products.belongsToMany(Order, {
  through: {
    model: OrderProduct,
    foreignkey: "productId",
  },
});

module.exports = { User, products, Booking, OrderType, Order, OrderProduct };
