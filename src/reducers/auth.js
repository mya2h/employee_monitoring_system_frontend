import { AUTH_SUCCESS, AUTH_FAIL, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    role: localStorage.getItem('role'),
    isAuthenticated: null,
    loading: true,
    _id:localStorage.getItem('id')
}

export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case AUTH_SUCCESS:
            localStorage.setItem('token', payload.token)
            localStorage.setItem('role', payload.role)
            localStorage.setItem('id', payload._id)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            }
        case AUTH_FAIL:
            localStorage.removeItem('token')
            // localStorage.removeItem('role')
            return {
                ...state,
                token: null,
                role: null,
                isAuthenticated: false,
                loading: false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            return {
                ...state,
                token: null,
                // role: null,
                isAuthenticated: false,
                loading: false
            }
        default:
            return state
    }
}