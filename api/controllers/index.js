const mongoose = require('mongoose');
const Location = mongoose.model('Location');

module.exports.locations = (req, res) => {
  Location.find({}, (err, locations) => {
    res.status(200);
    res.send(locations)
  });
}
