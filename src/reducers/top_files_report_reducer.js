import {TOP_FILES_LIST_REPORT_SUCCESS,TOP_FILES_LIST_REPORT_FAIL} from '../actions/types'

const initalState={
    itemLoaded:null,
    loading:true,
    top_files:[]
}

function topFilesReportReducer(state=initalState,actions){
    const {type,payload}=actions
    switch(type){
        case TOP_FILES_LIST_REPORT_SUCCESS:
            return{
                ...state,
                itemLoaded:true,
                loading:false,
                top_files:payload
            }
        case TOP_FILES_LIST_REPORT_FAIL:
            return{
                ...state,
                itemLoaded:false,
                loading:false

            }
        default:
            return state
    }
}


export default topFilesReportReducer