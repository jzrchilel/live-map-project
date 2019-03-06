const router = require('express').Router();
const { check } = require('express-validator/check');
const {
  getLocationsCtrl,
  createLocationCtrl,
  updateLocationCtrl,
  deleteLocationCtrl
} = require('../controllers');

/**
 * Route serving all locations
 * 
 * @name GET/locations
 * @param {function} getLocation controler tha handle the route
 */
router.get('/locations', getLocationsCtrl);

/**
 * Route to create a new location
 * 
 * @name POST/locations
 * @param {array} checks Array that checeks every param
 * @param {function} createLocation controler tha handle the route
 */
router.post('/locations', [
  check('name').not().isEmpty(),
  check('latitude').isNumeric(),
  check('longitude').isNumeric(),
  check('status').isBoolean()
], createLocationCtrl);

/**
 * Route to edit one location based in the _id passed
 * 
 * @name PUT/locations
 * @param {array} checks Array that checeks every param
 * @param {function} editLocation controler tha handle the route
 */
router.put('/locations', [
  check('_id').not().isEmpty(),
  check('name').not().isEmpty(),
  check('latitude').isNumeric(),
  check('longitude').isNumeric(),
  check('status').isBoolean()
], updateLocationCtrl);

/**
 * Route to delete one location based in the _id passed
 * 
 * @name DELETE/locations
 * @param {array} checks Array that checeks every param
 * @param {function} deleteLocation controler tha handle the route
 */
router.delete('/locations', [
  check('_id').not().isEmpty()
], deleteLocationCtrl);

module.exports = router;
