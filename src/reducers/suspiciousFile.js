import {SUSPICIOUS_FILES_LIST_SUCCESS,SUSPICIOUS_FILES_LIST_FAIL} from '../actions/types'

const initialState = {
    loading:true,
    isItemLoaded:null,
    suspiciousFile:[]
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case SUSPICIOUS_FILES_LIST_SUCCESS:
            return{
                ...state,
                suspiciousFile:payload,
                isItemLoaded:true,
                loading:false
            }
        case SUSPICIOUS_FILES_LIST_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}