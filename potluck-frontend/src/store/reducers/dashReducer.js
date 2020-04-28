// import
import {
    FETCH_POTLUCK_START,
    FETCH_POTLUCK_SUCCESS,
    FETCH_POTLUCK_FAILURE
} from '../actions/dashActions'

import {
    FETCH_POTLUCK_BY_ID_START,
    FETCH_POTLUCK_BY_ID_SUCCESS,
    FETCH_POTLUCK_BY_ID_FAILURE
} from '../actions/dashActions'

import {
    POST_POTLUCK_START,
    POST_POTLUCK_SUCCESS,
    POST_POTLUCK_FAIL
} from '../actions/dashActions'
import {
    UPDATE_POTLUCK_START,
    UPDATE_POTLUCK_SUCCESS,
    UPDATE_POTLUCK_FAIL
} from '../actions/dashActions'

import {POTLUCK_DELETE} from '../actions/dashActions'

export const initialState = {
    data:[],
    potlucks:[],
    isFetching:false
}

export const dashReducer = (state = initialState, action) => {
    switch (action.type) {
////////////////GET//////////////////////////////////////////////
        case FETCH_POTLUCK_START:
            console.log(action.payload)
            return{...state, isFetching:true}
        case FETCH_POTLUCK_SUCCESS:
            console.log(action.payload)
            return{
                ...state,
                data:action.payload}
        case FETCH_POTLUCK_FAILURE:
            console.log(action.payload)
            return{...state}
/////////////////GET BY ID////////////////////////////////////////
        case FETCH_POTLUCK_BY_ID_START:
            console.log(action.payload)
            return{...state}
        case FETCH_POTLUCK_BY_ID_SUCCESS:
            console.log(action.payload)
            return{...state}
        case FETCH_POTLUCK_BY_ID_FAILURE:
            console.log(action.payload)
            return{...state}
////////////////POST//////////////////////////////////////////////
        case POST_POTLUCK_START:
            console.log(action.payload)
            return{...state}
        case POST_POTLUCK_SUCCESS:
            console.log(action.payload)
            return{...state}
        case POST_POTLUCK_FAIL:
            console.log(action.payload)
            return{...state}
////////////////PUT//////////////////////////////////////////////
        case UPDATE_POTLUCK_START:
            console.log(action.payload)
            return{...state}
        case UPDATE_POTLUCK_SUCCESS:
            console.log(action.payload)
            return{...state}
        case UPDATE_POTLUCK_FAIL:
            console.log(action.payload)
            return{...state}
////////////////DELETE//////////////////////////////////////////////
        case POTLUCK_DELETE:
            console.log(action.payload)
            return{...state}

        default:
        return state;
    }
}