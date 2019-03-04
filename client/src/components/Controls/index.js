import React, { Fragment } from 'react';
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
  Input
} from 'reactstrap';
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

class Controls extends React.Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <Fragment>
        <div style={navStyle}>
          <NavigationControl onViewportChange={this.props.updateViewport} />
        </div>
        <div style={buttonStyle}>
          <Button onClick={this.toggle} color="primary">Add Location</Button>
        </div>
        <Modal 
          isOpen={this.state.modal} 
          toggle={this.toggle} 
          className={this.props.className}
          backdrop="static"
        >
          <ModalHeader toggle={this.toggle}>Adding new location</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                  <Input type="text" name="name" id="name" placeholder="Location name" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="latitude" sm={2}>Latitude</Label>
                <Col sm={10}>
                  <Input type="text" name="latitude" id="latitude" placeholder="Location latitude" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="longitude" sm={2}>Longitude</Label>
                <Col sm={10}>
                  <Input type="text" name="longitude" id="longitude" placeholder="Location longitude" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select status</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>Open</option>
                  <option>Close</option>
                </Input>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

Controls.propTypes = {
  updateViewport: PropTypes.func.isRequired,
};

export default Controls;
