import {INDIVIDUAL_SUCCESS,INDIVIDUAL_FAIL} from '../actions/types'

const initialState = {
    singleUser: {},
    isItemLoaded: null,
    loading: true
}


export default function (state = initialState, actions) {
    const { type, payload } = actions
    switch (type) {
        case INDIVIDUAL_SUCCESS:
            return {
                ...state,
                singleUser: payload,
                isItemLoaded: true,
                loading: false
            }
        case INDIVIDUAL_FAIL:
            return {
                ...state,
                isItemLoaded: false,
                loading: false
            }
        default:
            return state
    }
}