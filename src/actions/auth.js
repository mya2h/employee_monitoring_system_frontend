import axios from 'axios'
import { USER_LOADED_SUCCESS, USER_LOADED_FAIL, AUTH_SUCCESS, AUTH_FAIL } from './types'
import {setAlert} from './alert'
export const register = (value) => async dispatch => {
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('http://localhost:5000/api/users/hr/register', body, config)
        console.log(res.data)
        dispatch(setAlert('registered successfully','success'))
    }
    catch (err) {
        console.log(err.response)
        dispatch(setAlert('unable to register user','error'))
    }
}
export const authenticate = (value) => async dispatch => {
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('http://localhost:5000/api/user/authenticate', body, config)
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: AUTH_FAIL,
        })
    }
}
export const getAllUsers = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/v1/hr/allusers', config)
        dispatch({
            type: USER_LOADED_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: USER_LOADED_FAIL,
        })
    }
}
export const editUser = async (value) => {
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('', body, config)
    }
    catch (err) {
        console.log(err)
    }
}
export const activateUser = async (value) => {
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('http://localhost:5000/api/users/hr/activate/:id', body, config)
    }
    catch (err) {
        console.log(err)
    }
}
export const deactivateUser = async (value) => {
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('http://localhost:5000/api/users/hr/deactivate/:id', body, config)
    }
    catch (err) {
        console.log(err)
    }
}