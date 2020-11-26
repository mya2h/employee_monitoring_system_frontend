import {DO_NOT_TRACK_LIST_SUCCESS,DO_NOT_TRACK_LIST_FAIL} from '../actions/types'


const initialState = {
    loading:true,
    isItemLoaded:null,
    notTrackedList:[]
}

export default function(state=initialState,action){
    const {type,payload} = action
    switch (type){
        case DO_NOT_TRACK_LIST_SUCCESS:
            return{
                ...state,
                notTrackedList:payload,
                isItemLoaded:true,
                loading:false
            }
        case DO_NOT_TRACK_LIST_FAIL:
            return{
                ...state,
                isItemLoaded:false,
                loading:false
            } 
        default:
            return state       
    }
}