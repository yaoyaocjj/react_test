import { combineReducers } from 'redux'
import todos from '../../src/reducers/todoReducer';
import filter from '../../src/reducers/filterReducer';

export default combineReducers({
  todos,
  filter
});

