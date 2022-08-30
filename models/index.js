// CREATE RELATIONSHIPS BETWEEN MODELS AND EXPORT MODULES
const User = require("./User");
const Products = require("./Products");
const Booking = require("./Booking");

//relation ship between booking and user
User.hasMany(Booking, { foreignKey: "Userid" });
Booking.belongsTo(User, { foreignKey: "Userid" });

module.exports = { User, Products, Booking };
