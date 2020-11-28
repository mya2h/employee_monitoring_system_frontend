import { Casino, TramRounded } from "@material-ui/icons"
import {VIEW_REGISTER_RESOURCE_FAIL,VIEW_REGISTER_RESOURCE_SUCCESS} from "../actions/types"

const intialState={
    registered_resource:[],
    itemLoaded:null,
    loading:true
}

function resourceReducer(state=intialState,actions){
    const {type,payload}=actions

    switch(type){
        case VIEW_REGISTER_RESOURCE_SUCCESS:
            return{
                ...state,
                registered_resource:payload,
                itemLoaded:true,
                loading:false
            
            }
        case VIEW_REGISTER_RESOURCE_FAIL:
            return{
                ...state,
                itemLoaded:false,
                loading:false

            }
        default:
            return state
    }
}
export default resourceReducer