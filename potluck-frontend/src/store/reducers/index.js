import {combineReducers} from 'redux'
import {loginReducer as login} from './loginReducer'
import {signupReducer as signup} from './signupReducer'


export default combineReducers({
    login,
    signup
})