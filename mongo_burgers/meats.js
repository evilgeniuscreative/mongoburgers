const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = mongoose.connection;
//db.collection('meats').deleteMany({});

const meatSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  description: String,
  cost: {
    type: Number,
    default: 1,
  },
});
const Meat = mongoose.model('Meat', meatSchema);

module.exports = Meat;
