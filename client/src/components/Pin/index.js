import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './icons/placeholder.svg';

const pinStyle = {
  cursor: 'pointer',
};

function Pin({ showInfoHandler }) {
  return (
    <img
      style={{ ...pinStyle, transform: `translate(${-40 / 2}px,${-40}px)` }}
      src={Placeholder}
      height={40}
      alt="Map pin"
      onClick={city => showInfoHandler(city)}
    />
  );
}

Pin.propTypes = {
  showInfoHandler: PropTypes.func.isRequired,
};

export default Pin;
