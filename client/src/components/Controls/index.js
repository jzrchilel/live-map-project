import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormFeedback
} from 'reactstrap';
import PropTypes from 'prop-types';
import { NavigationControl } from 'react-map-gl';
import { formActions } from '../../state/actions';

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
  padding: 10,
};

class Controls extends Component {
  state = {
    modal: false,
    form: {
      name: '',
      latitude: '',
      longitude: '',
      status: true,
    },
    errors: {
      name: false,
      latitude: false,
      longitude: false,
      status: false,
    }
  };

  toggle = () => {
    this.revertErrors();
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }

  revertErrors = () => {
    const errors = {
      name: false,
      latitude: false,
      longitude: false,
      status: false,
    };

    this.setState({
      errors
    })
  }

  handleValidation = () => {
    const { errors, form } = this.state;
    let isFormValid = true;

    if (!form.name) {
      isFormValid = false;
      errors.name = true;
    } else {
      isFormValid = true;
      errors.name = false;
    }

    if (!form.latitude) {
      isFormValid = false;
      errors.latitude = true;
    } else {
      isFormValid = true;
      errors.latitude = false;
    }

    if (!form.longitude) {
      isFormValid = false;
      errors.longitude = true;
    } else {
      isFormValid = true;
      errors.longitude = false;
    }

    this.setState({ errors });
    
    return isFormValid;
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { form } = this.state;
    const { createLocation } = this.props;

    if (this.handleValidation()) {
      createLocation(form);
      this.toggle();
    }
  }

  handleInputChange = (e) => {
    const { target } = e;
    const { value, name } = target;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [name]: value,
      },
    }));
  }

  render() {
    const { updateViewport } = this.props;
    const { modal } = this.state;
    return (
      <Fragment>
        <div style={navStyle}>
          <NavigationControl onViewportChange={updateViewport} />
        </div>
        <div style={buttonStyle}>
          <Button onClick={this.toggle} color="primary">Add Location</Button>
        </div>
        <Modal 
          isOpen={modal} 
          toggle={this.toggle}
          backdrop="static"
        >
          <ModalHeader toggle={this.toggle}>Adding new location</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Location name"
                    value={this.state.form.name}
                    onChange={this.handleInputChange}
                    invalid={this.state.errors.name}
                  />
                  <FormFeedback>Location name is required.</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="latitude" sm={2}>Latitude</Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="latitude"
                    id="latitude"
                    placeholder="Location latitude"
                    value={this.state.form.latitude}
                    onChange={this.handleInputChange}
                    invalid={this.state.errors.latitude}
                  />
                  <FormFeedback>Latitude is required.</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="longitude" sm={2}>Longitude</Label>
                <Col sm={10}>
                  <Input
                    type="number"
                    name="longitude"
                    id="longitude"
                    placeholder="Location longitude"
                    value={this.state.form.longitude}
                    onChange={this.handleInputChange}
                    invalid={this.state.errors.longitude}
                  />
                  <FormFeedback>Longitude is required.</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="status">Select status</Label>
                <Input 
                  type="select"
                  name="status"
                  id="status"
                  value={this.state.form.status}
                  onChange={this.handleInputChange}
                >
                  <option value="true">Open</option>
                  <option value="false">Close</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.submitHandler}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

Controls.propTypes = {
  updateViewport: PropTypes.func.isRequired,
  createLocation: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createLocation: data => dispatch(formActions.newLocation(data))
});

export default connect(null, mapDispatchToProps)(Controls);
