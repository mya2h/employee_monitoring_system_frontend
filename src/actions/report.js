import {ACTIVTY_LOG_SUCCESS,ACTVITY_LOG_FAIL,TOP_APPLICATION_LIST_REPORT_FAIL,TOP_APPLICATION_LIST_REPORT_SUCCESS,TOP_WEBSITE_LIST_REPORT_FAIL,TOP_WEBSITE_LIST_REPORT_SUCCESS} from './types'
import axios from 'axios'

export const getActivityLogs = () => async dispatch=> {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/changedFiles/', config)
        console.log(res.data)
        dispatch({
            type: ACTIVTY_LOG_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: ACTVITY_LOG_FAIL,
        })
    }
}
export const getTopWebsites = () => async dispatch=> {
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/activeWindows/websites/14/14', config)
        console.log(res.data)
        dispatch({
            type: TOP_WEBSITE_LIST_REPORT_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: TOP_WEBSITE_LIST_REPORT_FAIL,
        })
    }
}
export const getTopApplications = (deviceId) => async dispatch=> {
    const device = deviceId

    
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    if(device == 'allDevices'){
        try {
            const res = await axios.get('http://localhost:5000/api/activeWindows/apps/14/14', config)
            console.log(res.data)
            dispatch({
                type: TOP_APPLICATION_LIST_REPORT_SUCCESS,
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: TOP_APPLICATION_LIST_REPORT_FAIL,
            })
        }
    }
    else{
        try {
            const res = await axios.get('http://localhost:5000/api/activeWindows/apps/14/14?deviceId='+device, config)
            console.log(res.data)
            dispatch({
                type: TOP_APPLICATION_LIST_REPORT_SUCCESS,
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
            dispatch({
                type: TOP_APPLICATION_LIST_REPORT_FAIL,
            })
        }
    }
}
