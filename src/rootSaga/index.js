import { all, takeLatest } from 'redux-saga/effects';
import { mapActionTypes } from '../modules/map/actions/actionTypes';
import getLocationsApiWorker from '../modules/map/sagas/geLocations';

export default function* rootSaga() {
  yield all([
    takeLatest(mapActionTypes.FETCH_LOCATION_REQUEST, getLocationsApiWorker)
  ]);
};

