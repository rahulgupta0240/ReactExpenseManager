import {
    GET_CATEGORY_FAIL,
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_REQUEST,
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    EDIT_CATEGORY_FAIL,
    EDIT_CATEGORY_REQUEST,
    EDIT_CATEGORY_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
	data:[]
};

export default function CATEGORYReducer(state = initialState, action = {}) {
	switch (action.type) {
		case GET_CATEGORY_REQUEST:
			console.log("Reducer Request")
			return {
				...state,
				fetching: true,
				error: ''
			};
		case GET_CATEGORY_SUCCESS:
			console.log("Reducer Success",action)
			return {
				...state,
				data: action.data,
				fetching: false,
				error: ''
			};
		case GET_CATEGORY_FAIL:
			return {
				...state,
				fetching: false,
				error: ''
            };
        
                case CREATE_CATEGORY_SUCCESS:
			return {
				...state,
                data: state.data.concat(action.data),
				fetching: false,
				error: ''
            };
            
            case CREATE_CATEGORY_FAIL:
			return {
				...state,
				fetching: false,
				error: action.data
            };
            
            case CREATE_CATEGORY_REQUEST:
			return {
				...state,
				fetching: true,
				error: ''
            };

            case EDIT_CATEGORY_REQUEST:
                return {
                    ...state,
                    fetching: true,
                    error: ''
                };
            

            case EDIT_CATEGORY_SUCCESS:
			return {
                ...state,
                data: state.data.concat(action.data),
				fetching: false,
				error: ''
            };
            
            case EDIT_CATEGORY_FAIL:
			return {
				...state,
				fetching: false,
				error: action.data
			};
		default:
			return state;
	}
}