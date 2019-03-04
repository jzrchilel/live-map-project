import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';

const Input = ({ type, name, onChange, value, ...rest }) => (
  <input
    name={name}
    type={type}
    value={value}
    onChange={e => {
      e.preventDefault();
      onChange(name, e.target.value);
    }}
    {...rest}
  />
);

function PopupComponent({ popupInfo, onCloseHandler }) {
  const [editable, setEditable] = useState(false);
  const [values, setValues] = useState({
    name: '', 
    state: '',
    latitude: '',
    longitude: ''
  });

  useEffect(() => {
    setValues({
      name: popupInfo && popupInfo.name, 
      state: popupInfo && popupInfo.state,
      latitude: popupInfo && popupInfo.latitude,
      longitude: popupInfo && popupInfo.longitude
    });
  }, [popupInfo])

  const onChangeHandler = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(JSON.stringify(values));
  };

  const onCancelHandler = () => {
    setEditable(false);
  }

  const onClosePopup = () => {
    setEditable(false);
    onCloseHandler();
  }

  return popupInfo && (
    <Popup
      tipSize={5}
      latitude={popupInfo.latitude}
      longitude={popupInfo.longitude}
      closeOnClick={false}
      anchor="top"
      onClose={onClosePopup}
    >
      {
        !editable
          ? (<div>
              <p><strong>Status: </strong>{' '}
              {popupInfo.status ? 'Open' : 'Close'}</p>
              <p><strong>Name: </strong>{' '}
              {popupInfo.name}</p>
              <p><strong>Latitude: </strong>
              {popupInfo.latitude}</p>
              <p><strong>Longitude: </strong>
              {popupInfo.longitude}</p>
              <button onClick={() => setEditable(true)}>Edit</button>
            </div>)
          : (<form onSubmit={onSubmitHandler}>
              <label htmlFor="name">
                Name:
                <Input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="state">
                State:
                <Input
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="latitude">
                Latitude:
                <Input
                  type="text"
                  name="latitude"
                  value={values.latitude}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="longitude">
                Longitude:
                <Input
                  type="text" 
                  name="longitude"
                  value={values.longitude}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <input type="submit" value="Submit" />
              <button onClick={onCancelHandler}>Cancel</button>
            </form>)
      }
    </Popup>
  );
}

PopupComponent.propTypes = {
  popupInfo: PropTypes.object,
  onCloseHandler: PropTypes.func.isRequired
};

export default PopupComponent;
