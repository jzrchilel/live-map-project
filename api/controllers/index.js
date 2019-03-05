const mongoose = require('mongoose');
const Location = mongoose.model('Location');

const getLocations = (req, res) => {
  Location.find({}, (err, locations) => {
    res.status(200);
    res.json(locations)
  });
};

const createLocation = (req, res) => {
  Location.create({
    name: req.body.name,
    status: req.body.status,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, (err, location) => {
    res.status(201);
    res.json(location);
  });
};

const editLocation = (req, res) => {
  Location.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    status: req.body.status,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }, { new: true }, (err, location) => {
    res.status(201);
    res.json(location);
  });
};

const deleteLocation = (req, res) => {
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
