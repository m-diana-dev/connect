import avatar1 from '../images/users/avatar-1.png'
import avatar2 from '../images/users/avatar-2.png'
import avatar3 from '../images/users/avatar-3.jpg'
import avatar4 from '../images/users/avatar-4.jpg'
import avatar5 from '../images/users/main.png'
import profileReducer, {AddPostActionCreator} from "./profile-reducer.ts";
import dialogsReducer from "./dialogs-reducer.ts";
import friendsReducer from "./friends-reducer.ts";


export type PostsType = {
    id: number
    likes: number
    text: string
}
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
export type FriendsType = {
    id: number
    img: string
    name: string
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[],
    newMessageText: string
}
export type FriendsPageType = {
    friends: FriendsType[]
}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    FriendsPage: FriendsPageType
}

export type StoreType = {
    _callSubscriber: (state: StateType) => void
    _state: StateType
    getState: () => StateType
    subscriber: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

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


export const store: StoreType = {
    _callSubscriber(state: StateType) {
        console.log(state)
    },
    _state: {
        ProfilePage: {
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
        },
        DialogsPage: {
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
            ],
            newMessageText: '',
        },
        FriendsPage: {
            friends: [
                {id: 1, img: avatar1, name: 'Anna Del'},
                {id: 2, img: avatar2, name: 'Dima Petrov'},
                {id: 3, img: avatar3, name: 'Lida'},
                {id: 4, img: avatar4, name: 'Ivan Ivanov'},
                {id: 5, img: avatar5, name: 'Mikkel'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action: ActionType) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action)
        this._state.DialogsPage = dialogsReducer( this._state.DialogsPage,action)
        this._state.FriendsPage = friendsReducer(this._state.FriendsPage, action)

        this._callSubscriber(this._state);
    }
}
