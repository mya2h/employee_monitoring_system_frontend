import {ACTIVTY_LOG_SUCCESS,ACTVITY_LOG_FAIL} from './types'
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