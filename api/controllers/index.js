const { validationResult } = require('express-validator/check');
const {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation
} = require('./location');

/**
 * Returns an object with error validations 
 * 
 * @name sendErrorMessage
 * @function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object} 
 * @throws Will return an error if one or all arguments are null.
 */
const sendErrorMessage = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

/**
 * Find all locations an return all locations found
 * with a status 200 OK
 * 
 * @name getLocations
 * @function  
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object}
 * @throws Will return an error if there was a problem getting all locations
 */
const getLocationsCtrl = async (req, res) => {
  try {
    const locations = await getLocations();
    res.status(200).json(locations);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

/**
 * Create a new location with params passed
 * and return new location created
 * with a status 201 OK
 * 
 * @name createLocation
 * @function 
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object}
 * @throws Will return an error if there was a problem creating one location
 */
const createLocationCtrl = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const location = await createLocation(req.body);
    return res.status(201).json(location);
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};

/**
 * Edit location based in the _id passed
 * and return the location updated
 * with a status 201 OK
 * 
 * @name editLocation
 * @function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object}
 * @throws Will return an error if there was a problem updating one location
 */
const updateLocationCtrl = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const location = await updateLocation(req.body);
    return res.status(201).json(location);
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};

/**
 * Delete location based in the _id passed
 * and return the _id of the location deleted
 * 
 * @name deleteLocation
 * @function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object}
 * @throws Will return an error if there was a problem deleting one location
 */
const deleteLocationCtrl = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const location = await deleteLocation(req.body);
    res.json({ _id: location._id });
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};

module.exports = {
  getLocationsCtrl,
  createLocationCtrl,
  updateLocationCtrl,
  deleteLocationCtrl
};
