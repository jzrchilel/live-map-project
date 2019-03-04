const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/live-map-project';
mongoose.connect(dbURI, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ', dbURI);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = function(msg, callback) {
  mongoose.disconnect(() => {
    console.log('Mongoose disconnected through ', msg);
    callback();
  });
}

// process.on('SIGUSR2', () => {
//   gracefulShutdown('nodemon restart', () => {
//     process.kill(process.pid, 'SIGUSR2');
//   });
// });

process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

require('./locations');
