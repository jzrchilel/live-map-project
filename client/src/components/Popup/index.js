import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Popup } from 'react-map-gl';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';
import { formActions } from '../../state/actions';

const InputComponent = ({ type, name, onChange, value, ...rest }) => (
  <Input
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

  const [errors, setErrors] = useState({
      name: false,
      latitude: false,
      longitude: false
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

  const onValidationHandler = () => {
    const newErrors = { ...errors };
    let isFormValid = true;

    if (!values.name) {
      isFormValid = false;
      newErrors.name = true;
    } else {
      isFormValid = true;
      newErrors.name = false;
    }

    if (!values.latitude) {
      isFormValid = false;
      newErrors.latitude = true;
    }

    if (!values.longitude) {
      isFormValid = false;
      newErrors.longitude = true;
    }

    setErrors(newErrors);
    
    return isFormValid;
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    if (onValidationHandler()) {
      editLocation(values);
      onClosePopup();
    }
  };

  const revertErrors = () => {
    setErrors({
      name: false,
      latitude: false,
      longitude: false
    });
  }

  const onCancelHandler = () => {
    revertErrors();
    onClosePopup();
  };

  const onClosePopup = () => {
    revertErrors();
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
              <Button color="primary" onClick={() => setEditable(true)}>Edit</Button>{' '}
              <Button color="danger" onClick={onDeleteHandler}>Delete</Button>
            </div>)
          : (<Container>
              <h5>Edit Location</h5><hr />
              <Form>
                <FormGroup row>
                  <Label for="name" sm={3}>Name</Label>
                  <Col sm={9}>
                    <InputComponent
                      type="text"
                      name="name"
                      placeholder="Location name"
                      value={values.name}
                      onChange={onChangeHandler}
                      invalid={errors.name}
                    />
                    <FormFeedback>Location name is required.</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="latitude" sm={3}>Latitude</Label>
                  <Col sm={9}>
                    <InputComponent
                      type="number"
                      name="latitude"
                      id="latitude"
                      placeholder="Location latitude"
                      value={values.latitude}
                      onChange={onChangeHandler}
                      invalid={errors.latitude}
                    />
                    <FormFeedback>Latitude is required.</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="longitude" sm={3}>Longitude</Label>
                  <Col sm={9}>
                    <InputComponent
                      type="number"
                      name="longitude"
                      id="longitude"
                      placeholder="Location longitude"
                      value={values.longitude}
                      onChange={onChangeHandler}
                      invalid={errors.longitude}
                    />
                    <FormFeedback>Longitude is required.</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup>
                  <Label for="status">Select status</Label>
                  <Input 
                    type="select"
                    name="status"
                    value={values.status}
                    onChange={e => {
                      e.preventDefault();
                      onChangeHandler('status', e.target.value);
                    }}
                  >
                    <option value="true">Open</option>
                    <option value="false">Close</option>
                  </Input>
                </FormGroup>
              </Form>
              <Button color="success" type="submit" onClick={onSubmitHandler}>Save</Button>{' '}
              <Button color="secondary" onClick={onCancelHandler}>Cancel</Button>
            </Container>)
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
