import {DEVICE_GROUP_SUCCESS,DEVICE_GROUP_FAIL} from '../actions/types'


const initialState = {
    loading:true,
    isItemLoaded:null,
    groups:[]
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case DEVICE_GROUP_SUCCESS:
            return{
                ...state,
                groups:payload,
                isItemLoaded:true,
                loading:false
            }
        case DEVICE_GROUP_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}