import { ACTIVTY_LOG_SUCCESS,ACTVITY_LOG_FAIL} from "../actions/types"

const initialState={
    itemLoaded:null,
    loading:true,
    activity:[]
}

function activityLog(state=initialState,actions){
    const {type, payload}=actions
    switch(type){
        case ACTIVTY_LOG_SUCCESS:
            return{
                ...state,
                itemLoaded:true,
                loading:false,
                activity:payload,
            }
        case ACTVITY_LOG_FAIL:
            return {
                ...state,
                itemLoaded:false,
                loading:false,
            

            }
        default:
            return state

    }
}

export default activityLog;