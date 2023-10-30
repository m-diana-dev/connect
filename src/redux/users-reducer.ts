import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";


const SET_USERS = 'SET-USERS'
export const FOLLOW_USER = 'FOLLOW-USER'
export const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
export const TOGGLE_ISLOADING = 'TOGGLE-ISLOADING'

export const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING'

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
    isLoading: boolean
    isFollowing: number[]
}

const initialState: UsersPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    isFollowing: []
}
export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    // debugger
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}
        case FOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, followed: true} : el)}
        case UNFOLLOW_USER:
            return {...state, users: state.users.map(el=>el.id===action.id?{...el, followed: false} : el)}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case "TOGGLE-ISLOADING":
            return {...state, isLoading: action.isLoading}
        case "TOGGLE-IS-FOLLOWING":
            return {...state, isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userID]
                    : state.isFollowing.filter(el=>el !== action.userID)}
        default:
            return state
    }
}

//AC

export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)
export const followUser = (id: number) => ({type: FOLLOW_USER, id} as const)
export const unfollowUser = (id: number) => ({type: UNFOLLOW_USER, id} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)
export const toggleIsLoading = (isLoading: boolean) => ({type: TOGGLE_ISLOADING, isLoading} as const)
export const toggleIsFollowing = (isFollowing: boolean, userID: number) => ({type: TOGGLE_IS_FOLLOWING, isFollowing, userID} as const)

//TC

export const getUsersTC = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true))
    connectAPI.getUsers(pageSize, currentPage)
        .then((response) => {
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
            dispatch(toggleIsLoading(false))
        })
}

export const followUsersTC = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userID))
    connectAPI.followUser(userID)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(followUser(userID))
            }
            dispatch(toggleIsFollowing(false, userID))
        })
}

export const unfollowUsersTC = (userID: number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFollowing(true, userID))
    connectAPI.unfollowUser(userID)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(unfollowUser(userID))
            }
            dispatch(toggleIsFollowing(false, userID))
        })
}
