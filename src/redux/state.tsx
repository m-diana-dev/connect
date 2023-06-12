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
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages:MessagesType[]
}
export type FriendsPageType = {
    friends:FriendsType[]
}

export type StateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
    FriendsPage: FriendsPageType
}

export let state:StateType  = {
    ProfilePage: {
        posts: [
            {id: 1, likes: 12, text: 'Hello!'},
            {id: 2, likes: 3, text: 'Do not give up, the beginning is always the hardest.'},
            {id: 3, likes: 22, text: 'Knowledge is power.'},
            {id: 4, likes: 6, text: 'Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality!'},
        ],
    },
    DialogsPage: {
        dialogs: [
            {id: 1, img:avatar1, name: 'Anna Del'},
            {id: 2, img:avatar2, name: 'Dima Petrov'},
            {id: 3, img:avatar3, name: 'Lida'},
            {id: 4, img:avatar4, name: 'Ivan Ivanov'},
            {id: 5, img:avatar5, name: 'Mikkel'},
        ],
        messages: [
            {id: 1, text: 'Hi'},
            {id: 2, my: true, text: 'Hi!'},
            {id: 3, text: 'Vulputate imperdiet platea quis, dictum morbiex.'},
            {id: 4, text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'},
            {id: 5, my: true, text: 'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'},
        ]
    },
    FriendsPage: {
        friends: [
            {id: 1, img:avatar1, name: 'Anna Del'},
            {id: 2, img:avatar2, name: 'Dima Petrov'},
            {id: 3, img:avatar3, name: 'Lida'},
            {id: 4, img:avatar4, name: 'Ivan Ivanov'},
            {id: 5, img:avatar5, name: 'Mikkel'},
        ]
    }
}