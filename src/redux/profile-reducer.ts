import {ActionType} from "./actions-types.ts";
import {Dispatch} from "redux";
import {connectAPI} from "../api/api.ts";
import {AppStateType} from "../redux/redux-store.ts";


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
    profile: ProfileInfoType | null
    status: string
}


const ADD_POST = 'PROFILE/ADD-POST';
const SET_USER_PROFILE = 'PROFILE/SET-USER-PROFILE';
const SET_USER_STATUS = 'PROFILE/SET-USER-STATUS';
const SET_USER_PHOTO = 'PROFILE/SET-USER-PHOTO';

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
    profile: null,
    status: ''
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            return {...state, posts: [{id: 5, likes: 0, text: action.newPostText}, ...state.posts]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status}
        case SET_USER_PHOTO:
            return {...state, profile: {...state.profile, photos: {large: action.photos.large, small: action.photos.small}}}
        default:
            return state
    }
}


//AC
export const AddPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const SetUserProfile = (profile: ProfileInfoType) => ({type: SET_USER_PROFILE, profile} as const)
export const SetUserStatus = (status: string) => ({type: SET_USER_STATUS, status} as const)
export const SetPhoto = (photos: { small: string, large: string }) => {
    return ({type: SET_USER_PHOTO, photos} as const);
}


//TC
export const SetUserProfileTC = (userID: number) => async (dispatch: Dispatch) => {
    const res = await connectAPI.getProfile(userID)
    dispatch(SetUserProfile(res))
}

export const GetUserStatusTC = (userID: number) => async (dispatch: Dispatch) => {
    const res = await connectAPI.getStatus(userID)
    dispatch(SetUserStatus(res))
}

export const UpdateUserStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const res = await connectAPI.updateStatus(status)
    if (res.resultCode === 0) {
        dispatch(SetUserStatus(res))
    }
}
export const savePhotoTC = (photo: File) => async (dispatch: Dispatch) => {
    const res = await connectAPI.savePhoto(photo)
    if (res.resultCode === 0) {
        dispatch(SetPhoto(res.data.photos))
    }
}

export const updateProfileTC = (data: any) => async (dispatch: any, getState: AppStateType) => {
    const res = await connectAPI.updateProfile(data)
    if (res.resultCode === 0) {
        dispatch(SetUserProfileTC(getState().auth.id))
    }
}
