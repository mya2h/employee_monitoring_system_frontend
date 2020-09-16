import axios from 'axios'
import { USER_LOADED_SUCCESS, USER_LOADED_FAIL, AUTH_SUCCESS, AUTH_FAIL } from './types'

export const register = async (value) => {
    const body = JSON.stringify(value)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('', body, config)
    }
    catch (err) {
        console.log(err)
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
        const res = await axios.post('', body, config)
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
        const res = await axios.get('', config)
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