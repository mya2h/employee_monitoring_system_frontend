import {SUSPICIOUS_ACTIVITIES_LIST_SUCCESS,SUSPICIOUS_ACTIVITIES_LIST_FAIL,SUSPICIOUS_FILES_LIST_SUCCESS,SUSPICIOUS_FILES_LIST_FAIL} from './types'
import axios from 'axios'
import {setAlert} from './alert'

export const addSuspiciousActivities = (value) => async dispatch=>{
    const body = JSON.stringify(value)
    console.log(body)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post('http://localhost:5000/api/suspiciousWindowRegister', body, config)
        console.log(res.data)
        dispatch(setAlert('activity registered successfully','success'))
        getSuspiciousActivities()(dispatch)
    }
    catch(err){
        console.log(err.response)
        const errors = err.response.data.errors
        console.log(errors);
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'error')));

    }
    }
}

export const getSuspiciousActivities = () => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/suspiciousWindowRegister', config)
        dispatch({
            type: SUSPICIOUS_ACTIVITIES_LIST_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: SUSPICIOUS_ACTIVITIES_LIST_FAIL,
        })
    }
}
export const getSuspiciousActivitiesFiles = (value) => async dispatch=>{
    const id = value
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/suspiciousWindowRegister'+id, config)
        dispatch({
            type: SUSPICIOUS_FILES_LIST_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: SUSPICIOUS_FILES_LIST_FAIL,
        })
    }
}
export const removeSuspiciousActivity = async (value)=>{
    const body = JSON.stringify(value)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post('', body, config)
    }
    catch(err){
        console.log(err)
    }
}