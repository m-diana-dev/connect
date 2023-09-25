import {ActionType} from "./actions-types.ts";


const SET_USERS = 'SET-USERS'
const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case FOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, follow: true} : el)}
        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, follow: false} : el)}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        default:
            return state
    }
}

export const SetUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const FollowUserAC = (id: number) => ({type: FOLLOW_USER, id} as const)
export const UnfollowUserAC = (id: number) => ({type: UNFOLLOW_USER, id} as const)
export const SetCurrenPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const SetTotalUsersCountAC = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)