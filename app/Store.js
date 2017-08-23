import {createStore, combineReducers} from 'redux';
import todos from './reducers/todoReducer';
import filter from './reducers/filterReducer';


const reducer = combineReducers({
	todos,
	filter
});

export default createStore(reducer);