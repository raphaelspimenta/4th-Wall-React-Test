import { combineReducers } from 'redux';

import contacts from './contacts';
import locations from './locations';

export default combineReducers({
  locations,
  contacts,
});
