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
export const doNotTrackDevice = (value)=> async dispatch=>{
    const body = JSON.stringify(value)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.put('http://localhost:5000/api/track/doNotTrack', body, config)
        console.log(res.data)
        dispatch(setAlert('added to not not track','success'))
        getDoNotTrackList()(dispatch)
    }
    catch(err){
        console.log(err)
        dispatch(setAlert('unable to add to not track','error'))
    }
}
export const backToTrack = (value)=>  async dispatch=>{
    const body = JSON.stringify(value)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.put('http://localhost:5000/api/track/backToTrack', body, config)
        console.log(res.data)
        dispatch(setAlert('added to track','success'))
        getDoNotTrackList()(dispatch)
    }
    catch(err){
        console.log(err.response)
        dispatch(setAlert('unable to add to not track ','error'))
    }
}
export const getDoNotTrackList = () => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/track/doNotTrack', config)
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
