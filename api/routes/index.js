const router = require('express').Router();
const { check } = require('express-validator/check');
const ctrlLocations = require('../controllers');

router.get('/locations', ctrlLocations.getLocations);

router.post('/locations', [
  check('name').not().isEmpty(),
  check('latitude').isNumeric(),
  check('longitude').isNumeric(),
  check('status').isBoolean()
], ctrlLocations.createLocation);

router.put('/locations', [
  check('_id').not().isEmpty(),
  check('name').not().isEmpty(),
  check('latitude').isNumeric(),
  check('longitude').isNumeric(),
  check('status').isBoolean()
], ctrlLocations.editLocation);

router.delete('/locations', [
  check('_id').not().isEmpty()
], ctrlLocations.deleteLocation);

module.exports = router;
