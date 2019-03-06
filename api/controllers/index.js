const mongoose = require('mongoose');
const { validationResult } = require('express-validator/check');
const Location = mongoose.model('Location');

const sendErrorMessage = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
}

const getLocations = (req, res) => {
  Location.find({}, (err, locations) => {
    res.status(200).json(locations)
  });
};

const createLocation = (req, res) => {
  sendErrorMessage(req, res);

  Location.create({
    name: req.body.name,
    status: req.body.status,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, (err, location) => {
    if (err) {
      console.log(err);
    }
    return res.status(201).json(location);
  });
};

const editLocation = (req, res) => {
  sendErrorMessage(req, res);

  Location.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    status: req.body.status,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, { new: true }, (err, location) => {
    return res.status(201).json(location);
  });
};

const deleteLocation = (req, res) => {
  sendErrorMessage(req, res);

  Location.findOneAndDelete({ _id: req.body._id }, (err, doc) => {
    res.json({ _id: doc._id });
  })
};

module.exports = {
  getLocations,
  createLocation,
  editLocation,
  deleteLocation
};
