import React from 'react';
import PropTypes from 'prop-types';
import { Marker } from 'react-map-gl';
import Pin from '../Pin';

function MarkerComponent({ data, showInfoHandler }) {
  return (
    data.map(city => (
      <Marker
        key={`key-${city._id}`}
        latitude={city.latitude}
        longitude={city.longitude}
      >
        <Pin showInfoHandler={() => showInfoHandler(city)} />
      </Marker>
    ))
  );
}

MarkerComponent.propTypes = {
  data: PropTypes.array.isRequired,
  showInfoHandler: PropTypes.func.isRequired,
};

export default MarkerComponent;
