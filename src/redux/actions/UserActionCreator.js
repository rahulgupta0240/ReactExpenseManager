import axios from 'axios';
import {

    GET_USERS_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    CREATE_USER_FAIL,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS

} from '../constants/ActionTypes';

// Get All User
function request() {
    return {
        type: GET_USERS_REQUEST
    }
}

function receiveData(json) {
    return {
        type: GET_USERS_SUCCESS,
        data: json
    }
}

export function getUsers() {
    console.log("Function call")
    return async dispatch => {
        console.log("Action Inside Dispatch")
        dispatch(request());

        //Alternate way
        //dispatch({ type: USERINFO_FAIL, data: json });


        try {
            let res = await axios.get("http://localhost:3001/users", { timeout: 20000 });
            let data = res.data;
            if (res.status === 200) {

                return (dispatch(receiveData(data)));
            }
            else {
                return dispatch({ type: GET_USERS_FAIL, data: data });
            }

        } catch (error) {
            alert('error:' + error);
        }


        // return axios.get("https://jsonplaceholder.typicode.com/users",{ timeout: 20000 })
        // 	.then(response => response.data)
        // 	.then(json => {
        //         if (json.Success == 'false') {
        //             return dispatch({ type: GET_USERS_FAIL, data: json });
        //         } else {
        //             console.log("success")
        //             return (dispatch(receiveData(json)));
        //         }
        // 	})
        //     .catch(err => {
        //         console.error(err);
        //         //return dispatch(errorServer(err));
        //         return dispatch();
        //     });
    };
}


// Get All User
function createUserRequest() {
    return {
        type: CREATE_USER_REQUEST
    }
}

function createUserReceiveData(json) {
    return {
        type: CREATE_USER_SUCCESS,
        data: json
    }
}

export function createUsers(json) {

    return dispatch => {
        dispatch(createUserRequest());

        return axios.post("http://localhost:3001/users", json)
            .then(response => response.data)
            .then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_USER_FAIL, data: json });
                } else {
                    return (dispatch(createUserReceiveData(json)));
                }
            })
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}