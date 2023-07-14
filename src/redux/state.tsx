import avatar1 from '../images/users/avatar-1.png'
import avatar2 from '../images/users/avatar-2.png'
import avatar3 from '../images/users/avatar-3.jpg'
import avatar4 from '../images/users/avatar-4.jpg'
import avatar5 from '../images/users/main.png'


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
    messages: MessagesType[]
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
    _callSubscriber:(state: StateType)=>void
    _state:StateType
    getState:()=>StateType
    subscriber:(observer: (state: StateType) => void)=>void
    addPost:()=>void
    updateNewPostText:(postText: string)=>void
}


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
            ]
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
    getState(){
        return this._state;
    },
    subscriber(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    addPost(){
        const newPost = {id: 5, likes: 0, text: this._state.ProfilePage.newPostText};
        this._state.ProfilePage.posts.push(newPost)
        this._state.ProfilePage.newPostText = ''
        this._callSubscriber(this._state);
    },
    updateNewPostText(postText: string) {
        this._state.ProfilePage.newPostText = postText;
        this._callSubscriber(this._state);
    }
}