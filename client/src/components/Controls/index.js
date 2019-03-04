import React from 'react';
import PropTypes from 'prop-types';
import { NavigationControl } from 'react-map-gl';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

function Controls({ updateViewport }) {
  return (
    <div style={navStyle}>
      <NavigationControl onViewportChange={updateViewport} />
    </div>
  );
}

Controls.propTypes = {
  updateViewport: PropTypes.func.isRequired,
};

export default Controls;
