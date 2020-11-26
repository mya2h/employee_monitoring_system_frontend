import {SUSPICIOUS_ACTIVITIES_LIST_SUCCESS,SUSPICIOUS_ACTIVITIES_LIST_FAIL} from './types'
import axios from 'axios'

export const assSuspiciousActivities = async (value)=>{
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
export const getSuspiciousActivities = () => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('', config)
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