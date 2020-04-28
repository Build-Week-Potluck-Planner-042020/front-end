// import
import {
    FETCH_ITEM_START,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEM_FAILURE
} from '../actions/itemActions'

import {
    POST_ITEM_START,
    POST_ITEM_SUCCESS,
    POST_ITEM_FAIL
} from '../actions/itemActions'
import {
    UPDATE_ITEM_START,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAIL
} from '../actions/itemActions'

import {ITEM_DELETE} from '../actions/itemActions'

export const initialState = {
    id:"",
    name:"",
}

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
////////////////GET//////////////////////////////////////////////
        case FETCH_ITEM_START:
            console.log(action.payload)
            return{...state}
        case FETCH_ITEM_SUCCESS:
            console.log(action.payload)
            return{...state}
        case FETCH_ITEM_FAILURE:
            console.log(action.payload)
            return{...state}
////////////////POST//////////////////////////////////////////////
        case POST_ITEM_START:
            console.log(action.payload)
            return{...state}
        case POST_ITEM_SUCCESS:
            console.log(action.payload)
            return{...state}
        case POST_ITEM_FAIL:
            console.log(action.payload)
            return{...state}
////////////////PUT//////////////////////////////////////////////
        case UPDATE_ITEM_START:
            console.log(action.payload)
            return{...state}
        case UPDATE_ITEM_SUCCESS:
            console.log(action.payload)
            return{...state}
        case UPDATE_ITEM_FAIL:
            console.log(action.payload)
            return{...state}
////////////////DELETE//////////////////////////////////////////////
        case ITEM_DELETE:
            console.log(action.payload)
            return{...state}

        default:
        return state;
    }
}