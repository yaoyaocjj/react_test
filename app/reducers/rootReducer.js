import { createStore, combineReducers } from 'redux'
import todos from './todoReducer'
import filter from './filterReducer';

const reducer = combineReducers({
	todos,
  filter
});

export default createStore(reducer);