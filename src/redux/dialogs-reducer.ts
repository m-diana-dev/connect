import avatar1 from "../assets/images/users/avatar-1.png";
import avatar2 from "../assets/images/users/avatar-2.png";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar5 from "../assets/images/users/main.png";
import {ActionType, SendMessageActionType} from "./actions-types.ts";

export type DialogsType = {
    id: number
    img: string
    name: string
}
export type MessagesType = {
    id: number
    my?: boolean
    text: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[],
}

const SEND_MESSAGE = 'DIALOGS/SEND-MESSAGE';

const initialState: DialogsPageType = {
    dialogs: [
        {id: 1, img: avatar1, name: 'Anna Del'},
        {id: 2, img: avatar2, name: 'Dima Petrov'},
        {id: 3, img: avatar3, name: 'Lida'},
        {id: 4, img: avatar4, name: 'Ivan Ivanov'},
        {id: 5, img: avatar5, name: 'Mikkel'},
    ],
    messages: [
        {id: 1, text: 'Hi'},
        {id: 2, my: true, text: 'Hi!'},
        {id: 3, text: 'Vulputate imperdiet platea quis, dictum morbiex.'},
        {
            id: 4,
            text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'
        },
        {
            id: 5,
            my: true,
            text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'
        },
    ]
}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [...state.messages, {id: 10, my: true, text: action.newMessageText}]}
        default: return state
    }
}

export const SendMessageActionCreator = (newMessageText: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer