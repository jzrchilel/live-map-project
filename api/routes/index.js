const router = require('express').Router();
const ctrlLocations = require('../controllers');

router.get('/locations', ctrlLocations.getLocations);
router.post('/locations', ctrlLocations.createLocation);
router.put('/locations', ctrlLocations.editLocation);
router.delete('/locations', ctrlLocations.deleteLocation);

module.exports = router;
