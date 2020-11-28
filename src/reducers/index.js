import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import alert from './alert'
import device from './device'
export default combineReducers({
    auth,
    users,
    alert,
    device
})