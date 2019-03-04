import React, { Fragment } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { NavigationControl } from 'react-map-gl';

const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
};

const buttonStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 10
};

function Controls({ updateViewport }) {
  return (
    <Fragment>
      <div style={navStyle}>
        <NavigationControl onViewportChange={updateViewport} />
      </div>
      <div style={buttonStyle}>
        <Button color="primary">Add Location</Button>
      </div>
    </Fragment>
  );
}

Controls.propTypes = {
  updateViewport: PropTypes.func.isRequired,
};

export default Controls;
