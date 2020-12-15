import {NOTIFICATION_LIST_SUCCESS,NOTIFICATION_LIST_FAIL} from '../actions/types'


const initialState = {
    loading:true,
    isItemLoaded:null,
    notification:[],
    count:0
}

export default function(state=initialState,action){
    const {type,payload,count} = action
    switch (type){
        case NOTIFICATION_LIST_SUCCESS:
            return{
                ...state,
                notification:payload,
                isItemLoaded:true,
                count:count,
                loading:false
            }
        case NOTIFICATION_LIST_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}