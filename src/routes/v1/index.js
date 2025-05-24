const express = require('express');
const CityController = require('../../controllers/city-controller.js');

const router = express.Router();

router.use('/city', CityController.create);

module.exports = router;