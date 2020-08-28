import {
    GET_USERS_FAIL,
    GET_USERS_SUCCESS,
    GET_USERS_REQUEST,
	CREATE_USER_SUCCESS,
	CREATE_USER_REQUEST,
	CREATE_USER_FAIL
} from '../constants/ActionTypes';

const initialState = {
	data:[]
};

export default function UserReducer(state = initialState, action = {}) {
	switch (action.type) {
		case GET_USERS_REQUEST:
			console.log("Reducer Request")
			return {
				...state,
				fetching: true,
				error: ''
			};
		case GET_USERS_SUCCESS:
			console.log("Reducer Success",action)
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		case GET_USERS_FAIL:
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		
			case CREATE_USER_SUCCESS:
				return {
					...state,
					data: action.data,
					fetching: false,
					error: ''
				};
			
				case CREATE_USER_FAIL:
					return {
						...state,
						fetching: false,
						error: action.data
					};
					case CREATE_USER_REQUEST:
						return {
							...state,
							fetching: true,
							error: ''
						};
										
		default:
			return state;
	}
}