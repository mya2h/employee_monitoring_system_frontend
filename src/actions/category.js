import {DEVICE_GROUP_SUCCESS,DEVICE_GROUP_FAIL} from './types'
import axios from 'axios'
import {setAlert} from './alert'

export const addNewGroup = (value)=>async dispatch=>{
    const body = JSON.stringify(value)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post('http://localhost:5000/api/category/register', body, config)
        dispatch(setAlert('category added successfully','success'))
    }
    catch(err){
        dispatch(setAlert('unable to add new category','error'))
    }
}
export const addGroupMember = async (value)=>{
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
export const getDeviceGroupList = () => async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/category/get', config)
        dispatch({
            type: DEVICE_GROUP_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DEVICE_GROUP_FAIL,
        })
    }
}
export const updateCategory = async (value)=>{
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.put('http://localhost:5000/api/category/update'+value, config)
    }
    catch(err){
        console.log(err)
    }
}
export const deleteCategory = async (value)=>{
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.delete('http://localhost:5000/api/category/delete'+value, config)
    }
    catch(err){
        console.log(err)
    }
}