import {ActionType, UpdateNewPostTextActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";


export type PostsType = {
    id: number
    likes: number
    text: string
}

export type ProfileInfoType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileInfoType | null
    status: string
}



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initialState: ProfilePageType = {
    posts: [
        {id: 1, likes: 12, text: 'Hello!'},
        {id: 2, likes: 3, text: 'Do not give up, the beginning is always the hardest.'},
        {id: 3, likes: 22, text: 'Knowledge is power.'},
        {
            id: 4,
            likes: 6,
            text: 'Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality!'
        },
    ],
    newPostText: '',
    profile: null,
    status: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [{id: 5, likes: 0, text: state.newPostText},...state.posts], newPostText: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.postText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        default: return state
    }
}


//AC
export const AddPostActionCreator = () => ({type: ADD_POST} as const)
export const UpdateNewPostTextActionCreator = (postText: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    postText
})
export const SetUserProfile = (profile: ProfileInfoType) => ({type: SET_USER_PROFILE, profile} as const)
export const SetUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)


//TC
export const SetUserProfileTC = (userID: number) => (dispatch: Dispatch) => {
    connectAPI.getProfile(userID)
        .then((res) => {
            dispatch(SetUserProfile(res))
        })
}

export const GetUserStatusTC = (userID: number) => (dispatch: Dispatch) => {
    connectAPI.getStatus(userID)
        .then((res) => {
            dispatch(SetUserStatus(res))
        })
}

export const UpdateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    connectAPI.updateStatus(status)
        .then((res) => {
            if(res.data.resultCode === 0){
                dispatch(SetUserStatus(res))
            }
        })
}