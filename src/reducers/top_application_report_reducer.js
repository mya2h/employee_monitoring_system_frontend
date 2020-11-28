import {TOP_APPLICATION_LIST_REPORT_FAIL,TOP_APPLICATION_LIST_REPORT_SUCCESS} from "../actions/types"

const initialState={
    itemLoaded:null,
    loading:true,
    top_applications:[]
}

function topApplicationReportReducer(state=initialState,actions){
    const {type, payload}=actions
    switch(type){
        case TOP_APPLICATION_LIST_REPORT_SUCCESS:
            return{
                ...state,
                itemLoaded:true,
                loading:false,
                top_applications:payload,
            }
        case TOP_APPLICATION_LIST_REPORT_FAIL:
            return {
                ...state,
                itemLoaded:false,
                loading:false,
            

            }
        default:
            return state

    }
}

export default topApplicationReportReducer;