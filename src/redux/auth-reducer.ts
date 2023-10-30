import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";

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
                isAuth: true
            }
        default: return state
    }
}


//AC
export const SetUser = (id: number, login: string, email: string) => ({type: SET_USER, id, login, email} as const)


//TC
export const authMeTC = () => (dispatch: Dispatch) => {
    connectAPI.authMe()
        .then(res => {
            if (res.resultCode === 0) {
                const {id, login, email} = res.data
                dispatch(SetUser(id, login, email))
            }
        })
}