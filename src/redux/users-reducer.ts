import {ActionType} from "./actions-types.ts";


const SET_USERS = 'SET-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'

export type UserType = {
    id: number
    photos: {
        large: string
        small: string
    }
    name: string
    status: string
    followed: boolean
}

export type UsersPageType = {
    users: UserType[]
}

const initialState: UsersPageType = {
    users: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case FOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, follow: true} : el)}
        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, follow: false} : el)}
        default:
            return state
    }
}

export const SetUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const FollowUserAC = (id: number) => ({type: FOLLOW_USER, id} as const)
export const UnfollowUserAC = (id: number) => ({type: UNFOLLOW_USER, id} as const)