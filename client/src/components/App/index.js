import React from 'react';
import openSocket from 'socket.io-client'
import config from '../../config';
import Map from '../Map';
import 'mapbox-gl/dist/mapbox-gl.css';

// const socket = openSocket('http://localhost:4000')

function App () {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
