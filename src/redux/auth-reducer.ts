import {ActionType} from "./actions-types.ts";

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

export const SetUser = (id: number, login: string, email: string) => ({type: SET_USER, id, login, email})
