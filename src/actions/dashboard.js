import axios from 'axios'

export const getDeviceCount = async () =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/dashboard/devices', config)
        const value = res.data
        console.log(value)
        return value
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getSuspiciousFileCount = async() =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/dashboard/suspiciousFiles', config)
        const value = res.data
        return value
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getDeviceGroupCount = async () =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/dashboard/groups', config)
        const value = res.data
        return value
    }
    catch (err) {
        console.log(err.response)
    }
}
export const getSuspiciousCount = async () =>{
    const config = {
        headers:{
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.get('http://localhost:5000/api/dashboard/suspicious', config)
        const value = res.data
        return value
    }
    catch (err) {
        console.log(err.response)
    }
}