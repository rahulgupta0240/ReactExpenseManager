import {Category} from '../../Utils/Data/Category';
import {

    GET_CATEGORY_FAIL,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    CREATE_CATEGORY_FAIL,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    EDIT_CATEGORY_FAIL,
    EDIT_CATEGORY_SUCCESS,
    EDIT_CATEGORY_REQUEST,

    GET_CATEGORYEXPENSE_FAIL,
    GET_CATEGORYEXPENSE_REQUEST,
    GET_CATEGORYEXPENSE_SUCCESS,
    CREATE_CATEGORYEXPENSE_FAIL,
    CREATE_CATEGORYEXPENSE_REQUEST,
    CREATE_CATEGORYEXPENSE_SUCCESS,
    EDIT_CATEGORYEXPENSE_FAIL,
    EDIT_CATEGORYEXPENSE_SUCCESS,
    EDIT_CATEGORYEXPENSE_REQUEST
    
} from '../constants/ActionTypes';

// Get All CATEGORY
function requestCategory() {
    return {
        type: GET_CATEGORY_REQUEST
    }
}

function receiveCategories(json) {
    return {
        type: GET_CATEGORY_SUCCESS,
        data: json
    }
}

export  function getCategories() {
    
    return async dispatch =>{
        console.log("Action Inside Dispatch")
        dispatch(requestCategory());
        
        //Alternate way
        //dispatch({ type: CATEGORYINFO_FAIL, data: json });


        try {
               let res= await axios.get("http://localhost:3001/Category",{ timeout: 20000 });
        res = res.data;

        if  (res.Success === 'false'){
      
         return dispatch({ type: GET_CATEGORY_FAIL, data: res });
        }
        else{
            console.log(res);
         return (dispatch(receiveCategories(res)));
        }
            
        } catch (error) {
            console.error(error);
                //return dispatch(errorServer(err));
                return dispatch();
        }
    

        
    };
}


// Get All CATEGORY
function createCategoryRequest() {
    return {
        type: CREATE_CATEGORY_REQUEST
    }
}

function createCategoryReceiveData(json) {
    return {
        type: CREATE_CATEGORY_SUCCESS,
        data: json
    }
}

export function createCategory(json) {

    return dispatch => {
        dispatch(createCategoryRequest());

        return axios.post("http://localhost:3001/Category",json)
        	.then(response => response.data)
        	.then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_CATEGORY_FAIL, data: json });
                } else {
                    return (dispatch(getCategories()));
                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}



function updateCategoryRequest() {
    return {
        type: EDIT_CATEGORY_REQUEST
    }
}


function updateCategoryReceiveData(json) {
    return {
        type: EDIT_CATEGORY_SUCCESS,
        data: json
    }
}

export function updateCategory(id,json) {

    return dispatch => {
        dispatch(updateCategoryRequest());

        return axios.put(`http://localhost:3001/CATEGORY/${id}`,json)
        	.then(response => response.data)
        	.then(json => {
                console.log(json)
                if (json.Success === 'false') {
                    return dispatch({ type: EDIT_CATEGORY_FAIL, data: json });
                } else {
                    return (dispatch(getCategories()));

                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}





//CATEGORY EXPENSE


// Get All CATEGORYEXPENSE
function requestCategoryExpense() {
    return {
        type: GET_CATEGORYEXPENSE_REQUEST
    }
}

function receiveCategoriesExpense(json) {
    return {
        type: GET_CATEGORYEXPENSE_SUCCESS,
        data: json
    }
}

export  function getCategoriesExpense() {
    
    return async dispatch =>{
        console.log("Action Inside Dispatch")
        dispatch(requestCategoryExpense());
        
        //Alternate way
        //dispatch({ type: CATEGORYINFO_FAIL, data: json });


        try {
               let res= await axios.get("http://localhost:3001/Category",{ timeout: 20000 });
        res = res.data;

        if  (res.Success === 'false'){
      
         return dispatch({ type: GET_CATEGORYEXPENSE_FAIL, data: res });
        }
        else{
            console.log(res);
         return (dispatch(receiveCategoriesExpense(res)));
        }
            
        } catch (error) {
            console.error(error);
                //return dispatch(errorServer(err));
                return dispatch();
        }
    

        
    };
}


// Get All CATEGORY
function createCategoryExpenseRequest() {
    return {
        type: CREATE_CATEGORYEXPENSE_REQUEST
    }
}

function createCategoryExpenseReceiveData(json) {
    return {
        type: CREATE_CATEGORYEXPENSE_SUCCESS,
        data: json
    }
}

export function createCategoryExpense(json) {

    return dispatch => {
        dispatch(createCategoryExpenseRequest());

        return axios.post("http://localhost:3001/Category",json)
        	.then(response => response.data)
        	.then(json => {
                if (json.Success === 'false') {
                    return dispatch({ type: CREATE_CATEGORYEXPENSE_FAIL, data: json });
                } else {
                    return (dispatch(getCategoriesExpense()));
                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}



function updateCategoryExpenseRequest() {
    return {
        type: EDIT_CATEGORYEXPENSE_REQUEST
    }
}


function updateCategoryExpenseReceiveData(json) {
    return {
        type: EDIT_CATEGORYEXPENSE_SUCCESS,
        data: json
    }
}

export function updateCategoryExpense(id,json) {

    return dispatch => {
        dispatch(updateCategoryExpenseRequest());

        return axios.put(`http://localhost:3001/CATEGORY/${id}`,json)
        	.then(response => response.data)
        	.then(json => {
                console.log(json)
                if (json.Success === 'false') {
                    return dispatch({ type: EDIT_CATEGORYEXPENSE_FAIL, data: json });
                } else {
                    return (dispatch(getCategoriesExpense()));

                }
        	})
            .catch(err => {
                console.error(err);
                //return dispatch(errorServer(err));
                return dispatch();
            });
    };
}