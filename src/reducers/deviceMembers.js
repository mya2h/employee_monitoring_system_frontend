import {DEVICE_MEMBERS_SUCCESS,DEVICE_MEMBERS_FAIL} from '../actions/types'


const initialState = {
    loading:true,
    isItemLoaded:null,
    members:[]
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case DEVICE_MEMBERS_SUCCESS:
            return{
                ...state,
                members:payload,
                isItemLoaded:true,
                loading:false
            }
        case DEVICE_MEMBERS_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}