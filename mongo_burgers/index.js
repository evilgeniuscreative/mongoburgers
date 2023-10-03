const mongoose = require('mongoose');
const Meat = require('./meats.js');
const everyMeat = require('./meatlist.js');
const Toppings = require('./toppings.js');
const everyTopping = require('./toppingslist.js');
const PWD = '52bSDPIevdloK9a3';
const MONGO_URI = `mongodb+srv://GAtest_01:${PWD}@cluster0.tnd5cmm.mongodb.net/mongoburgers?retryWrites=true&w=majority`;
const db = mongoose.connection;

mongoose.connect(MONGO_URI);

console.log('everyMeat', everyMeat);
everyMeat.forEach(function (n) {
  Meat.findOneAndUpdate(n, n, {
    upsert: true,
    function(err, doc) {
      cl.doc;
    },
  });
});

// Connection statuses
db.on('error', (err) => console.log(err.message + 'is MongoDB not running?'));
db.on('connected', () => {
  console.log('MongoDB connected on:', MONGO_URI);
});
db.on('disconnected', () => {
  console.log('MongoDB disconnected from:', MONGO_URI);
});
