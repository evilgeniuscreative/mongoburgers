const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//db.collection('toppings').deleteMany({});

const toppingSchema = new Schema({
  topping: {
    type: String,
    unique: true,
  },
  cost: {
    type: Number,
    default: 0,
  },
});

const Topping = mongoose.model('Topping', toppingSchema, 'topping');

module.exports = { Topping };
