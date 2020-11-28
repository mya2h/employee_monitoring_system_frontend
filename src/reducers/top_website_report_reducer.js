import {TOP_WEBSITE_LIST_REPORT_FAIL,TOP_WEBSITE_LIST_REPORT_SUCCESS} from "../actions/types"
 
const initialState ={
    top_websites:[],
    itemLoaded:null,
    loading:true


}
function topWebsiteReportReducer(state=initialState,actions){
    const {type,payload}=actions
    switch(type){
        case TOP_WEBSITE_LIST_REPORT_SUCCESS:
            return{
                ...state,
                top_websites:payload,
                itemLoaded:true,
                loading:false
            }
        case TOP_WEBSITE_LIST_REPORT_FAIL:
            return{
                ...state,
                loading:false,
               itemLoaded:false
                
            }
        default:
            return state
    }


}
export default topWebsiteReportReducer