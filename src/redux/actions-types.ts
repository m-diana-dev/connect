import {AddPostActionCreator, SetPhoto, SetUserProfile, SetUserStatus} from "./profile-reducer.ts";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFollowing,
    toggleIsLoading,
    unfollowUser
} from "./users-reducer.ts";
import {SetCaptcha, SetError, SetUser} from "./auth-reducer.ts";
import {SetFriends} from "./friends-reducer.ts";
import {SetInitialized} from "./app-reducer.ts";

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>

export type SendMessageActionType = {
    type: 'DIALOGS/SEND-MESSAGE'
    newMessageText: string
}
export type SetUsersActionType = ReturnType<typeof setUsers>
export type FollowUserActionType = ReturnType<typeof followUser>
export type UnfollowUserActionType = ReturnType<typeof unfollowUser>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsLoadingActionType = ReturnType<typeof toggleIsLoading>
export type SetUserProfileAT = ReturnType<typeof SetUserProfile>
export type SetUserAT = ReturnType<typeof SetUser>
export type SetFriendsAT = ReturnType<typeof SetFriends>
export type toggleIsFollowingAT = ReturnType<typeof toggleIsFollowing>
export type SetUserStatusAT = ReturnType<typeof SetUserStatus>
export type SetErrorAT = ReturnType<typeof SetError>
export type SetInitializedAT = ReturnType<typeof SetInitialized>
export type SetPhotoAT = ReturnType<typeof SetPhoto>
export type SetCaptchaAT = ReturnType<typeof SetCaptcha>

export type ActionType =
    AddPostActionType
    | SendMessageActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsLoadingActionType
    | SetUserProfileAT
    | SetUserAT
    | SetFriendsAT
    | toggleIsFollowingAT
    | SetUserStatusAT
    | SetErrorAT
    | SetInitializedAT
    | SetPhotoAT
    | SetCaptchaAT