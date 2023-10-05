const express = require('express');
const { Meat } = require('../models/meats');
const { getAllMeats } = require('../controllers/meatController');
const router = express.Router();

router.get('/', getAllMeats);

module.exports = router;
