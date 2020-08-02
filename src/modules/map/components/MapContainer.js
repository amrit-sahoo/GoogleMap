import React from 'react';
import { Container } from 'native-base';
import LocSearchBar from './LocSearchBar';
import MyMapView from '../components/MapView';

const MapContainer = () => {
  return(
    <Container>
      <LocSearchBar />
      <MyMapView />
    </Container>
  )
}

export default MapContainer;