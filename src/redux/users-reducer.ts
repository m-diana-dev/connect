import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";
import {updateObjectInArray} from "../utils/object-helpers.ts";


const SET_USERS = 'USERS/SET-USERS'
export const FOLLOW_USER = 'USERS/FOLLOW-USER'
export const UNFOLLOW_USER = 'USERS/UNFOLLOW-USER'
const SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'USERS/SET-TOTAL-USERS-COUNT'
export const TOGGLE_ISLOADING = 'USERS/TOGGLE-ISLOADING'

export const TOGGLE_IS_FOLLOWING = 'USERS/TOGGLE-IS-FOLLOWING'

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
            return {...state, users: updateObjectInArray(state.users, action.id, 'id', {followed: true})}
        case UNFOLLOW_USER:
            return {...state, users: updateObjectInArray(state.users, action.id, 'id', {followed: false})}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_ISLOADING:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state, isFollowing: action.isFollowing
                    ? [...state.isFollowing, action.userID]
                    : state.isFollowing.filter(el => el !== action.userID)
            }
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
export const toggleIsFollowing = (isFollowing: boolean, userID: number) => ({
    type: TOGGLE_IS_FOLLOWING,
    isFollowing,
    userID
} as const)

//TC

export const getUsersTC = (pageSize: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsLoading(true))
    const response = await connectAPI.getUsers(pageSize, currentPage)
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleIsLoading(false))
}

const followUnfollowFlow = async (dispatch: Dispatch, userID: number, APIMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowing(true, userID))
    const response = await APIMethod(userID)
    if (response.resultCode === 0) {
        dispatch(actionCreator(userID))
    }
    dispatch(toggleIsFollowing(false, userID))
}
export const followUsersTC = (userID: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userID, connectAPI.followUser.bind(connectAPI),followUser)
}

export const unfollowUsersTC = (userID: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(dispatch, userID, connectAPI.unfollowUser.bind(connectAPI),unfollowUser)
}
