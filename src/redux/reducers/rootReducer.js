import { combineReducers } from 'redux';

import ThemeReducer from '../slices/ThemeSlice';

export default combineReducers({
  theme: ThemeReducer
});