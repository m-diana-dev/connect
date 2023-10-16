import {AddPostActionCreator, SetUserProfile} from "./profile-reducer.ts";
import {
    followUser,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsLoading,
    unfollowUser
} from "./users-reducer.ts";
import {SetUser} from "./auth-reducer.ts";
import {SetFriends} from "./friends-reducer.ts";

export type AddPostActionType = ReturnType<typeof AddPostActionCreator>

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    postText: string
}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    messageText: string
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


export type ActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsLoadingActionType
    | SetUserProfileAT
    | SetUserAT
    | SetFriendsAT