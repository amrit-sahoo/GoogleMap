import { requestStatus } from '../constants';
import { mapState } from './initialState';
import { mapActionTypes } from '../actions/actionTypes';

const locationReducer = (state = mapState, action) => {
  switch(action.type) {
    case mapActionTypes.FETCH_LOCATION_REQUEST:
      return {
        ...state,
        requestStatus: requestStatus.IN_PROGRESS,
      }
    case mapActionTypes.FETCH_LOCATION_SUCCESS:
      return {
        ...state,
        requestStatus: requestStatus.SUCCESS,
        data: action.params.results,
      }
    case mapActionTypes.FECTH_LOCATION_FAILED:
      return {
        ...state,
        requestStatus: requestStatus.FAILED,
        error: action.params.error,
      }
    case mapActionTypes.CLEAR_LOCATIONS:
      return {
        ...state,
        data: [],
        selectedLoc: null,
      }
    default:
      return state;
  }
}

export default locationReducer;