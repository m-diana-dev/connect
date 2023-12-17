import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";
import {AppThunk} from "./redux-store.ts";
import {SetInitialized} from "./app-reducer.ts";

const SET_USER = 'AUTH/SET-USER';
const SET_ERROR = 'AUTH/SET-ERROR';

type AuthType = {
    id: number
    login: string
    email: string
    isAuth: boolean
    error: string
}

const initialState: AuthType = {
    id: 0,
    login: "",
    email: "",
    isAuth: false,
    error: ''
}
export const authReducer = (state: AuthType = initialState, action: ActionType): AuthType => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: action.isAuth
            }
        case SET_ERROR:
            return {...state, error: action.error}
        default:
            return state
    }
}


//AC
export const SetUser = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: SET_USER,
    id,
    login,
    email,
    isAuth
} as const)
export const SetError = (error: string) => ({type: SET_ERROR, error} as const)


//TC
export const authMeTC = () => async (dispatch: Dispatch) => {
    const res = await connectAPI.authMe()
    if (res.resultCode === 0) {
        const {id, login, email} = res.data
        dispatch(SetUser(id, login, email, true))
    }
}

export const loginUserTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    dispatch(SetError(''))
    const res = await connectAPI.loginUser(email, password, rememberMe)
    if (res.resultCode === 0) {
        dispatch(authMeTC())
        dispatch(SetError(''))
    } else {
        dispatch(SetError(res.messages[0]))
    }
}

export const logoutUserTC = () => async (dispatch: Dispatch) => {
    const res = await connectAPI.logoutUser()
    if (res.resultCode === 0) {
        dispatch(SetUser(0, '', '', false))
        dispatch(SetInitialized(false))
    }
}