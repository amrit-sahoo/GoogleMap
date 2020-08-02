import React from 'react';
import { connect } from 'react-redux';
import MapView,{ Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { setCuurentLocation } from '../actions';

// This component is not tested due to unavailibility of API Key. Consider the code only for evaluation

class MyMapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.region) !== JSON.stringify(this.state.region) && this.state.region) {
      this.props.updateSelectdLocation({ lat: this.state.region.latitude, lon: this.state.region.longitude})
    }
  }

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        minZoomLevel={5}
        maxZoomLevel={7}
        region={this.state.region}
        onRegionChangeComplete={region => this.setState({ region })}
      >
        {this.props.selectedLoc && (
          <Marker
            coordinate={{
              latitude: this.props.selectedLoc.lat,
              longitude: this.props.selectedLoc.lon
            }}
          />
        )}
      </MapView>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedLoc: state.locations.selectedLoc,
})

const mapDispatchToProps = (dispatch) => ({
  updateSelectdLocation: (loc) => dispatch(setCuurentLocation(loc))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyMapView);