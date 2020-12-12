import {SUSPICIOUS_ACTIVITIES_LIST_SUCCESS,SUSPICIOUS_ACTIVITIES_LIST_FAIL} from '../actions/types'

const initialState = {
    loading:true,
    isItemLoaded:null,
    suspiciousActivity:[]
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case SUSPICIOUS_ACTIVITIES_LIST_SUCCESS:
            return{
                ...state,
                suspiciousActivity:payload,
                isItemLoaded:true,
                loading:false
            }
        case SUSPICIOUS_ACTIVITIES_LIST_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}