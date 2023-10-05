const { Meat } = require('../models/meats');

//-------

//INDEX (displays all of the Meats)
const getAllMeats = async (req, res) => {
  const allMeats = await Meat.find();

  console.log(allMeats);

  res.render('./meats/meats', { allMeats });
};

module.exports = { getAllMeats };
