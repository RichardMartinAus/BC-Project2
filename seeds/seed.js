// // JS TO SEED THE DATABASE

// //const seedCategories = require('./category-seeds');
// const seedProducts = require('./products-seeds');
// const seedUser = require('./User-seeds');
// //const seedProductTags = require('./product-tag-seeds');

// const sequelize = require('../config/connection');

// const seedAll = async  () => {

//  await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');
//   //await seedCategories();
//   //console.log('\n----- CATEGORIES SEEDED -----\n');

//   await seedProducts();
//   console.log('\n----- PRODUCTS SEEDED -----\n');

//   await seedUser();
//   console.log('\n----- TAGS SEEDED -----\n');

//   //await seedProductTags();
//   //console.log('\n----- PRODUCT TAGS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();

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

  process.exit(0);
};

seedDatabase();
