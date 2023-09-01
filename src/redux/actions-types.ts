import {AddPostActionCreator} from "./profile-reducer.ts";
import {FollowUserAC, SetUsersAC, UnfollowUserAC} from "./users-reducer.ts";

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
export type SetUsersActionType = ReturnType<typeof SetUsersAC>
export type FollowUserActionType = ReturnType<typeof FollowUserAC>
export type UnfollowUserActionType = ReturnType<typeof UnfollowUserAC>

export type ActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnfollowUserActionType