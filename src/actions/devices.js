import {DEVICE_GROUP_SUCCESS,DEVICE_GROUP_FAIL,DEVICE_LIST_SUCCESS,DEVICE_LIST_FAIL,DO_NOT_TRACK_LIST_SUCCESS,DO_NOT_TRACK_LIST_FAIL} from './types'
import axios from 'axios'
import {setAlert} from './alert'
export const getDeviceList = () => async dispatch =>{
    console.log("kal")
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/deviceUsers', config)
        dispatch({
            type: DEVICE_LIST_SUCCESS,
            payload: res.data
        })
        console.log(res.data)
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DEVICE_LIST_FAIL,
        })
    }
}
export const doNotTrackDevice = async (value)=>{
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
export const getDoNotTrackList = () => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('', config)
        dispatch({
            type: DO_NOT_TRACK_LIST_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DO_NOT_TRACK_LIST_FAIL,
        })
    }
}
