const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { DATABASE_URL, PORT } = require('./config.js');
const { Meat } = require('./models/meats.js');
const { Topping } = require('./models/toppings.js');
const theToppings = require('./data/toppingslist.js');
const theMeats = require('./data/meatlist.js');

// start server
const startServer = async () => {
  // connect to to DB
  await mongoose.connect(DATABASE_URL);

  // Connection statuses
  // app.on('error', (err) => console.log(err.message + 'is MongoDB not running?'));

  // after connect, turn on server
  app.listen(PORT, function () {
    console.log('Your app is listening on port: ' + PORT);
  });

  // app.on('connected', () => {
  //   console.log('MongoDB connected on:', DATABASE_URL);
  // });
  // app.on('disconnected', () => {
  //   console.log('MongoDB disconnected from:', DATABASE_URL);
  // });
};

Meat.insertMany(theMeats.everyMeat);
Topping.insertMany(theToppings.everyTopping);

startServer();
