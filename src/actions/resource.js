import axios from 'axios'
import {FILE_LIST_SUCCESS,FILE_LIST_FAIL} from './types'
export const UploadFile = async (req,res)=>{
    const body = JSON.stringify(value)
    console.log(body)
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }
    try{
        const res = await axios.post('http://localhost:5000/api/suspiciousWindowRegister/file', body, config)
        console.log(res.data)
    }
    catch(err){
        console.log(err.response)
    }
} 