const { User } = require("../models");

const userData = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password1234",
    contactNo: 0451111111,
  },
  {
    name: "Lernantino",
    email: "lernantino@gmail.com",
    password: "coolPw2020",
    contactNo: 0451111112,
  },
  {
    name: "Amiko",
    email: "amiko2k20@aol.com",
    password: "amiko2k20!",
    contactNo: 0451111113,
  },
];

const seedUser = () => Category.bulkCreate(userData);

module.exports = seedUser;
