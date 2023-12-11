import {AppStateType} from "../redux-store.ts";
export const selectProfile = (state: AppStateType) => state.ProfilePage.profile
export const selectProfileStatus = (state: AppStateType) => state.ProfilePage.status
export const selectProfilePosts = (state: AppStateType) => state.ProfilePage.posts