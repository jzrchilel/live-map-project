const router = require('express').Router();
const ctrlLocations = require('../controllers');

router.get('/locations', ctrlLocations.locations);

module.exports = router;
