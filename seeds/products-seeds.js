const { Products } = require('../models');

const productData = [
  {
            "item" : "Coffee",
            "isVeg" :true,
            "desc" : "Soya, Almond, Oats,lactose free w/ Full cream or low fat milk",
            "Price" : 4.8,
  },
  {
            "item" : "tea",
            "isVeg" :true,
            "desc" : "Soya, Almond, Oats,lactose free w/ Full cream or low fat milk",
            "Price" : 4.0,
 },
  {
            "item" : "Hot chocolate",
            "isVeg" :true,
            "desc" : "Soya, Almond, Oats,lactose free w/ Full cream or low fat milk",
            "Price" : 4.5,
  },
  {
            "item" : "Iced Long black",
            "isVeg" :true,
            "desc" : "in Hazelnot, Vanilla, Caramel, Chocolate w/Full cream or low fat milk",
            "Price" : 4.5,
  },
  {
            "item" : "Flavoured Milkshake",
            "isVeg" :true,
            "desc" : "Mocha, Vanilla, strawberry, Chocolate",
            "Price" : 4.5,
  },
  {
            "item" : "Eggs on Toast",
            "isVeg" :false,
            "desc" : "Two eggs your way, tomato relish,rocket, balsamic glaze, ciabatta",
            "Price" : 12.9,
  },
  {
            "item" : "Bacon & Egg flat grill",
            "isVeg" :false,
            "desc" : "Toasted tortilla, cheese, tomato relish",
            "Price" : 13.50,
  },
  {
            "item" : "Brekkie Burger",
            "isVeg" :false,
            "desc" : "Bacon, egg, hash brown, BBQ sauce",
            "Price" : 13.90,
  },
  {
            "item" : "Eggs Benee",
            "isVeg" :false,
            "desc" : "Poached eggs, hollandaise, ciabatta e",
            "Price" : 19.90,
  },
  {
            "item" : "The Veg Breakfast",
            "isVeg" :true,
            "desc" : "fresh avo,cherry tomatoes, spinach, mushrooms, baked beans,",
            "Price" : 23.50,
  },
  {
            "item" : "Fish & Chips",
            "isVeg" :false,
            "desc" : "fish serverd with a bowl of chips and salad",
            "Price" : 15.60,
  },
  {
            "item" : "seasoned chips",
            "isVeg" :true,
            "desc" : "fresh crispy chips with chicken salt",
            "Price" : 6.50,
  },
  {
            "item" : "sweeet Potato wedges",
            "isVeg" :true,
            "desc" : "tasty sweet wedges",
            "Price" : 6.00,
  },
  {
            "item" : "Green Salad",
            "isVeg" :true,
            "desc" : "fresh farm picked green- steamed/boiled with chickpea, cheese",
            "Price" : 10.10,
  },
];

const seedproduct = () => Category.bulkCreate(productData);

module.exports = seedproduct;