import {DEVICE_LIST_SUCCESS,DEVICE_LIST_FAIL} from '../actions/types'

const initialState = {
    isItemLoaded:null,
    deviceList:[],
    loading:true
}
export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case DEVICE_LIST_SUCCESS:
            return{
                ...state,
                deviceList:payload,
                isItemLoaded:true,
                loading:false
            }
        case DEVICE_LIST_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            }
        default:
            return state       
    }
}
