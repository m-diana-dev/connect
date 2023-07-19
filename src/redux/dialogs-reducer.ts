import {
    ActionType, DialogsPageType,
    SendMessageActionType,
    UpdateNewMessageTextActionType,
} from "./state.tsx";


const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialogsReducer = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case SEND_MESSAGE:
            state.messages.push({id: 10, my: true, text: state.newMessageText})
            state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText
            return state
        default: return state
    }
}

export const SendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const UpdateNewMessageTextActionCreator = (messageText: string): UpdateNewMessageTextActionType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText
})

export default dialogsReducer