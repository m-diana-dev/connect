import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";
import {AppThunk} from "./redux-store.ts";

const SET_USER = 'SET-USER';

type AuthType = {
    id: number
    login: string
    email: string
    isAuth: boolean
}

const initialState: AuthType = {
    id: 0,
    login: "",
    email: "",
    isAuth: false
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
        default: return state
    }
}


//AC
export const SetUser = (id: number, login: string, email: string, isAuth: boolean) => ({type: SET_USER, id, login, email, isAuth} as const)


//TC
export const authMeTC = () => (dispatch: Dispatch) => {
    connectAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                const {id, login, email} = res.data
                dispatch(SetUser(id, login, email, true))
            }
        })
}

export const loginUserTC = (email: string, password: string, rememberMe:boolean): AppThunk => (dispatch) => {
    connectAPI.loginUser(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(authMeTC())
            }
        })
}

export const logoutUserTC = () => (dispatch: Dispatch) => {
    connectAPI.logoutUser()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(SetUser(0, '', '', false))
            }
        })
}