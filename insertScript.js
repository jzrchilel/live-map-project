const someLocations = [{
  name: 'Camp nou',
  latitude: 41.380979,
  longitude: 2.122807,
  status: true
}, {
  name: 'Parc del Espanya Industrial',
  latitude: 41.377398,
  longitude: 2.140502,
  status: true
}, {
  name: 'The Magic Fountain',
  latitude: 41.371285,
  longitude: 2.151756,
  status: false
}, {
  name: 'Montjuïc Castle',
  latitude: 41.362962,
  longitude: 2.165062,
  status: true
}, {
  name: 'Plaça de Catalunya',
  latitude: 41.387017,
  longitude: 2.170050,
  status: true
}, {
  name: 'Plaza Real',
  latitude: 41.380030,
  longitude: 2.175287,
  status: true
}, {
  name: 'Mercado de La Boqueria',
  latitude: 41.381742,
  longitude: 2.171587,
  status: true
}, {
  name: 'Basílica de Santa Maria del Pi',
  latitude: 41.382160,
  longitude: 2.173958,
  status: true
},{
  name: 'La Sagrada Familia',
  latitude: 41.403662,
  longitude: 2.174347,
  status: true
}];

db.locations.insertMany(someLocations);
