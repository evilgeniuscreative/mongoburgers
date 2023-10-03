const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;
db.collection('toppings').deleteMany({});

const Toppings = new Schema({
  topping: {
    type: String,
    unique: true,
  },
  cost: {
    type: Number,
    default: 0,
  },
});

module.exports = Toppings;
