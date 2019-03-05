import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import { formActions } from '../../state/actions';

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

function PopupComponent({ popupInfo, onCloseHandler, editLocation, deleteLocation }) {
  const [editable, setEditable] = useState(false);
  const [values, setValues] = useState({
    _id: '',
    name: '', 
    status: '',
    latitude: '',
    longitude: ''
  });

  useEffect(() => {
    setValues({
      _id: popupInfo && popupInfo._id,
      name: popupInfo && popupInfo.name, 
      status: popupInfo && popupInfo.status,
      latitude: popupInfo && popupInfo.latitude,
      longitude: popupInfo && popupInfo.longitude
    });
  }, [popupInfo])

  const onChangeHandler = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    editLocation(values);
    onClosePopup();
  };

  const onCancelHandler = () => {
    setEditable(false);
  };

  const onClosePopup = () => {
    setEditable(false);
    onCloseHandler();
  };

  const onDeleteHandler = () => {
    deleteLocation(values.id);
    onClosePopup();
  };

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
              <p>
                <strong>Name: </strong>{' '}
                {popupInfo.name}
              </p>
              <p>
                <strong>Latitude: </strong>
                {popupInfo.latitude}
              </p>
              <p>
                <strong>Longitude: </strong>
                {popupInfo.longitude}
              </p>
              <p>
                <strong>Status: </strong>{' '}
                {popupInfo.status ? 'Open' : 'Close'}
              </p>
              <button onClick={() => setEditable(true)}>Edit</button>{' '}
              <button onClick={onDeleteHandler}>Delete</button>
            </div>)
          : (<form onSubmit={onSubmitHandler}>
              <label htmlFor="name">
                Name: {' '}
                <Input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="latitude">
                Latitude: {' '}
                <Input
                  type="text"
                  name="latitude"
                  value={values.latitude}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="longitude">
                Longitude: {' '}
                <Input
                  type="text" 
                  name="longitude"
                  value={values.longitude}
                  onChange={onChangeHandler}
                />
              </label>
              <br />
              <label htmlFor="state">
                State: {' '}
                <select 
                  name="status"
                  value={values.status}
                  onChange={e => {
                    e.preventDefault();
                    onChangeHandler('status', e.target.value);
                  }}>
                  <option value="true">Open</option>
                  <option value="false">Close</option>
                </select>
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  editLocation: data => dispatch(formActions.editLocation(data)),
  deleteLocation: id => dispatch(formActions.deleteLocation(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupComponent);
