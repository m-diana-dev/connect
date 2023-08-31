import {AddPostActionCreator} from "./profile-reducer.ts";

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
export type ActionType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SendMessageActionType
    | UpdateNewMessageTextActionType