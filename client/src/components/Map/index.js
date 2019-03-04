import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactMapGL from 'react-map-gl';
import Popup from '../Popup';
import Marker from '../Marker';
import Controls from '../Controls';
import { helloActions } from '../../state/actions'

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100vh",
      latitude: 37.785164,
      longitude: -100,
      zoom: 3.5
    },
    popupInfo: null
  }

  componentDidMount() {
    this.props.helloActionsprop();
  }

  updateViewport = viewport => this.setState({ viewport });

  closePopupHandler = () => this.setState({ popupInfo: null })

  showInfoHadler = city => this.setState({ popupInfo: city })

  render() {
    return this.props.helloReducer && (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle='mapbox://styles/mapbox/dark-v9'
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}
        onViewportChange={this.updateViewport}
      >
        <Marker data={this.props.helloReducer.data} showInfoHandler={this.showInfoHadler}/>
        <Popup popupInfo={this.state.popupInfo} onCloseHandler={this.closePopupHandler} />
        <Controls updateViewport={this.updateViewport} />
      </ReactMapGL>
    );
  }
}

const mapStateToProps = state => ({
  helloReducer: state.reducer
});

const mapDispatchToProps = dispatch => ({
  helloActionsprop: () => dispatch(helloActions.helloAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);
