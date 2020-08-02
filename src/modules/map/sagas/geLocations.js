import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { getLocationsSuccess, getLocationsFailed } from '../actions';
import { apiUrls, requiredApiParams } from '../constants';

function getLocationsAPI(userInput) {
  const encodedInput = encodeURIComponent(userInput);
  const url = `${apiUrls.TOMTOM_FUZZY_SEARCH}/${encodedInput}.json`;
  return axios.get(url, {params: requiredApiParams})
    .then(response => response)
    .catch((error) =>  { throw error });
}

export default function* getLocationsApiWorker(action) {
  try {
    const response = yield getLocationsAPI(action.params);
    yield put(getLocationsSuccess(response.data));
  } catch (error) {
    console.log('error in fetch', error);
    yield put(getLocationsFailed(error));
  }
}

