import axios from 'axios'
import { USER_LOADED_SUCCESS, USER_LOADED_FAIL,LOGOUT,AUTH_SUCCESS, AUTH_FAIL,INDIVIDUAL_SUCCESS,INDIVIDUAL_FAIL } from './types'
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
        const res = await axios.post('http://localhost:5000/api/HR/register', body, config)
        console.log(res.data)
        dispatch(setAlert('registered successfully','success'))
        getAllUsers()(dispatch)
    }
    catch (err) {
        console.log(err.response)
        dispatch(setAlert('unable to register user','error'))
    }
}
export const authenticate = (value) => async dispatch=>{
    const body = JSON.stringify(value)
    console.log(body)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post('http://localhost:5000/api/user/signin', body, config)
        console.log(res.data)
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err.response)
        dispatch({
            type: AUTH_FAIL,
        })
        dispatch(setAlert('unable to log in','error'))
    }
}
export const getAllUsers = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/HR/get', config)
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
export const activateUser = (_id) => async dispatch=>{
    const id = _id
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('http://localhost:5000/api/HR/activate/'+id, config)
        dispatch(setAlert('user activated successfuly','success'))
        getAllUsers()(dispatch)
    }
    catch (err) {
        console.log(err)
        dispatch(setAlert('unable to activate user','error'))
    }
}
export const deactivateUser =  (_id) => async dispatch=> {
    const id = _id
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('http://localhost:5000/api/HR/deactivate/'+id, config)
        dispatch(setAlert('user deactivated successfuly','success'))
        getAllUsers()(dispatch)
    }
    catch (err) {
        console.log(err)
        dispatch(setAlert('unable to deactivate user','error'))
    }
}
export const logout = () => dispatch=>{
    dispatch({type:LOGOUT})
}
export const getUserById =  ()=> async dispatch=>{
    const id = localStorage.getItem('id')
    console.log(id)
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/user/profile/'+id, config)
        console.log("valijasd",res.data)
        dispatch({
            type: INDIVIDUAL_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: INDIVIDUAL_FAIL,
        })
    }
}
export const changeProfile = async(value)=>{
    const body =  JSON.stringify(value)
    const id = localStorage.getItem('id')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.put('http://localhost:5000/api/user/update/'+id,body,config)
        console.log(res.data)
    }
    catch (err) {
        console.log(err.response)
    }
}
