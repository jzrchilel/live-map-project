const mongoose = require('mongoose');
const Location = require('../../api/models/locationSchema');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const { expect } = chai;

chai.use(chaiHttp);

function deleteDocument(id, done) {
  Location.deleteOne({ _id: id }, (err) => {
    done();
  });
}

describe('Test Locations API', () => {
  let idToDelete;

  afterEach((done) => {
    deleteDocument(idToDelete, done);
  });

  it('should send back a JSON object with all locations', (done) => {
    chai.request(app)
      .get('/api/locations')
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        const locations = res.body;
        
        expect(locations).to.be.an('array');

        locations.forEach((location) => {
          expect(location).to.have.property('_id');
          expect(location).to.have.property('name');
          expect(location.name).to.be.an('string');
          expect(location).to.have.property('latitude');
          expect(location.latitude).to.be.an('number');
          expect(location).to.have.property('longitude');
          expect(location.longitude).to.be.an('number');
          expect(location).to.have.property('status');
          expect(location.status).to.be.an('boolean');
        });

        done();
      });
  });

  const editLocations = {
    status: true,
    name: "My new location",
    latitude: 20.710502,
    longitude: -103.412408
  };

  it('should edit a location', (done) => {
    Location.create(editLocations, (err, location) => {
      location.name = 'My new location Edited';
    
      chai.request(app)
        .put('/api/locations')
        .send(location)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          idToDelete = res.body._id;
          expect(res.status).to.be.equal(201);
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('name');
          expect(res.body.name).to.be.an('string');
          expect(res.body).to.have.property('latitude');
          expect(res.body.latitude).to.be.an('number');
          expect(res.body).to.have.property('longitude');
          expect(res.body.longitude).to.be.an('number');
          expect(res.body).to.have.property('status');
          expect(res.body.status).to.be.an('boolean');

          done();
        });
    });
  });

  it('should delete a location', (done) => {
    Location.create(editLocations, (err, location) => {

      chai.request(app)
        .delete('/api/locations')
        .send({_id: location._id})
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          console.log(res.body);
          expect(res.status).to.be.equal(200);

          done();
        });
    });
  });
});

describe('Test POST', () => {
  let idToDelete;
  
  afterEach((done) => {
    deleteDocument(idToDelete, done);
  });

  const newLocation = {
    name: 'My new location',
    status: true,
    longitude: -103.412408,
    latitude: 20.710502
  };

  it('should create a new location', (done) => {
    chai.request(app)
      .post('/api/locations')
      .send(newLocation)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        idToDelete = res.body._id;
        expect(res.status).to.be.equal(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('name');
        expect(res.body.name).to.be.an('string');
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.be.an('boolean');
        expect(res.body).to.have.property('latitude');
        expect(res.body.latitude).to.be.an('number');
        expect(res.body).to.have.property('longitude');
        expect(res.body.longitude).to.be.an('number');

        done();
      });
  });
})
