import {combineReducers} from 'redux'
import {dashReducer as dashboard} from './dashReducer'
import {itemReducer as item} from './itemReducer'
// import {loginReducer as login} from './loginReducer'
// import {signupReducer as signup} from './signupReducer'


export default combineReducers({
    dashboard,
    item
})