// JS TO SEED THE DATABASE

const sequelize = require("../config/connection");
const { User, Booking, Products } = require("../models");

const userData = require("./userData.json");
const bookingData = require("./bookingData.json");
const productData = require("./menuData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const bookings = await Booking.bulkCreate(bookingData, {
    individualHooks: true,
    returning: true,
  });

  const menu = await Products.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

};

module.exports = seedDatabase;

