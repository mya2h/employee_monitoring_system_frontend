import {RNS_SHOW_NOTIFICATION, RNS_HIDE_NOTIFICATION, RNS_REMOVE_ALL_NOTIFICATIONS,NOTIFICATION_LIST_SUCCESS,NOTIFICATION_LIST_FAIL} from './types';
import axios from 'axios'
export const  getNotification = () => async dispatch=>{
  const config = {
    headers:{
        'Content-Type': 'application/json'
    }
}
try {
    const res = await axios.get('http://localhost:5000/api/openSuspiciousWindows/', config)
    const data = res.data
    let unseen = []
    let count = 0
    data.map((index) => {
      if(index.seen === false){
          unseen.push(index)
          count++
      }
      console.log(unseen)
    })
    dispatch({
        type: NOTIFICATION_LIST_SUCCESS,
        payload: res.data,
        count:count
    })
}
catch (err) {
    console.log(err)
    dispatch({
        type: NOTIFICATION_LIST_FAIL,
    })
}
}
export const addToSeen = (value)=> async dispatch=>{
  const id = value
  const config = {
    headers:{
        'Content-Type': 'application/json'
    }
  }
try {
  const res = await axios.put('http://localhost:5000/api/openSuspiciousWindows/'+id, config)
  getNotification()(dispatch)
  console.log(res.data)
}
catch(err){
  console.log(err.response)
}
}

