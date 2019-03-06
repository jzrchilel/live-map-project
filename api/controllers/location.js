const LocationModel = require('../models/locationSchema');

/**
 * Call LocationModel find to get all locations
 * 
 * @name getLocations
 * @params {}
 * @returns {object} Query
 */
const getLocations = async () => await LocationModel.find({ });

/**
 * Create a new location
 * 
 * @name createLocation
 * @param {object} location get properties object using destructuring
 * @returns {object} Query
 */
const createLocation = async ({ name, status, latitude, longitude }) => {
  return await LocationModel.create(
    { name, status, latitude, longitude }
  );
};

/**
 * Update one locations and get it back
 * 
 * @name updateLocation
 * @param {object} location 
 * @returns {object} Query
 */
const updateLocation = async ({ _id, name, status, latitude, longitude }) => {
  return await LocationModel.findByIdAndUpdate(_id,
    { name, status, latitude, longitude },
    { new: true }
  );
}

/**
 * Delete one locations and get the _id back
 * 
 * @name deleteLocation
 * @param {object} location get _id property using destructuring
 * @returns {object} Query
 */
const deleteLocation = async ({ _id }) => await LocationModel.findOneAndDelete({ _id })

module.exports = {
  getLocations,
  createLocation,
  updateLocation,
  deleteLocation
};
