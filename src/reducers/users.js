import { USER_LOADED_SUCCESS, USER_LOADED_FAIL } from '../actions/types'


const initialState = {
    users: [],
    isItemLoaded: null,
    loading: true
}

export default function (state = initialState, actions) {
    const { type, payload } = action
    switch (type) {
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                users: payload,
                isItemLoaded: true,
                loading: false
            }
        case USER_LOADED_FAIL:
            return {
                ...state,
                isItemLoaded: false,
                loading: false
            }
        default:
            return state
    }
}