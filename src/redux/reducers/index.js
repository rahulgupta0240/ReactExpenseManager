import { combineReducers } from 'redux';
import user from './users';
import category from './category';
export default combineReducers({
	user,
	category
});