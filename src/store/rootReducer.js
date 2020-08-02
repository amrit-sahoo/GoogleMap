import { combineReducers } from 'redux';

import locationReducer from '../modules/map/reducers/locationReducer';

const rootReducer = combineReducers({
  locations: locationReducer,
});

export default rootReducer;
