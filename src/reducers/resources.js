import {FILE_LIST_FAIL,FILE_LIST_SUCCESS} from "../actions/types"

const intialState={
    registered_resource:[],
    itemLoaded:null,
    loading:true
}

export default function(state=intialState,actions){
    const {type,payload}=actions

    switch(type){
        case FILE_LIST_SUCCESS:
            return{
                ...state,
                registered_resource:payload,
                itemLoaded:true,
                loading:false
            
            }
        case FILE_LIST_FAIL:
            return{
                ...state,
                itemLoaded:false,
                loading:false

            }
        default:
            return state
    }
}