import {DEVICE_GROUP_SUCCESS,DEVICE_GROUP_FAIL,DEVICE_MEMBERS_SUCCESS,DEVICE_MEMBERS_FAIL} from './types'
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
export const updateGroup = (value)=> async dispatch=>{
    const id = value.id
    const body = JSON.stringify(value)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        console.log(body)
        const res = await axios.put('http://localhost:5000/api/category/update/'+id, body, config)
        dispatch(setAlert('category edited successfully','success'))
        console.log(res.data)
    }
    catch(err){
        console.log(err.response)
        dispatch(setAlert('unable to edit category','error'))
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
        const res = await axios.delete('http://localhost:5000/api/category/delete/'+value, config)
    }
    catch(err){
        console.log(err)
    }
}
export const getDeviceMembers = (value)=>async dispatch=>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/member/getByCategory/'+value, config)
        dispatch({
            type: DEVICE_MEMBERS_SUCCESS,
            payload: res.data
        })
    }
    catch (err) {
        console.log(err)
        dispatch({
            type: DEVICE_MEMBERS_FAIL,
        })
    }
}
export const deleteMember= async (value)=>{
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.delete('http://localhost:5000/api/member/delete/'+value, config)
    }
    catch(err){
        console.log(err)
    }
}