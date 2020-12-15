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
export function show(opts = {}, level = 'success') {
  return {
    type: RNS_SHOW_NOTIFICATION,
    ...opts,
    uid: opts.uid || Date.now(),
    level
  };
}

export function success(opts) {
  return show(opts, 'success');
}

export function error(opts) {
  return show(opts, 'error');
}

export function warning(opts) {
  return show(opts, 'warning');
}

export function info(opts) {
  return show(opts, 'info');
}

export function hide(uid) {
  return {
    type: RNS_HIDE_NOTIFICATION,
    uid
  };
}

export function removeAll() {
  return { type: RNS_REMOVE_ALL_NOTIFICATIONS };
}
