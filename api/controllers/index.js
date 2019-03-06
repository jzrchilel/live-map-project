const mongoose = require('mongoose');
const { validationResult } = require('express-validator/check');
const Location = mongoose.model('Location');

/**
 * Returns an object with error validations 
 * 
 * @name sendErrorMessage
 * @function
 * @param {object} req Express request object
 * @param {object} res Express response object
 * @returns {object} 
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
 */
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find({ });
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
 */
const createLocation = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const { name, status, latitude, longitude } = req.body;
    const location = await Location.create({ name, status, latitude, longitude });

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
 */
const editLocation = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const { _id, name, status, latitude, longitude } = req.body;
    const location = await Location.findByIdAndUpdate(_id,
      { name, status, latitude, longitude },
      { new: true }
    );

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
 */
const deleteLocation = async (req, res) => {
  sendErrorMessage(req, res);
  try {
    const location = await Location.findOneAndDelete({ _id: req.body._id })
    res.json({ _id: location._id });
  } catch (error) {
    return res.status(400).json({ errors: error.errors });
  }
};

module.exports = {
  getLocations,
  createLocation,
  editLocation,
  deleteLocation
};
