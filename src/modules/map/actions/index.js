import { mapActionTypes } from './actionTypes';

const getLocations = (params) => ({
  type: mapActionTypes.FETCH_LOCATION_REQUEST,
  params: params,
});

const getLocationsSuccess = (params) => ({
  type: mapActionTypes.FETCH_LOCATION_SUCCESS,
  params: params,
});

const getLocationsFailed = (params) => ({
  type: mapActionTypes.FECTH_LOCATION_FAILED,
  params: params,
});

const setCuurentLocation = (params) => ({
  type: mapActionTypes.SET_CURRENT_LOCATION,
  params: params,
});

const clearLocations = () => ({
  type: mapActionTypes.CLEAR_LOCATIONS,
})

export {
  getLocations,
  getLocationsSuccess,
  getLocationsFailed,
  setCuurentLocation,
  clearLocations
}