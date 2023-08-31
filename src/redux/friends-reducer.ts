import avatar1 from "../images/users/avatar-1.png";
import avatar2 from "../images/users/avatar-2.png";
import avatar3 from "../images/users/avatar-3.jpg";
import avatar4 from "../images/users/avatar-4.jpg";
import avatar5 from "../images/users/main.png";
import {ActionType} from "./actions-types.ts";


export type FriendsType = {
    id: number
    img: string
    name: string
}
export type FriendsPageType = {
    friends: FriendsType[]
}

const initialState: FriendsPageType = {
    friends: [
        {id: 1, img: avatar1, name: 'Anna Del'},
        {id: 2, img: avatar2, name: 'Dima Petrov'},
        {id: 3, img: avatar3, name: 'Lida'},
        {id: 4, img: avatar4, name: 'Ivan Ivanov'},
        {id: 5, img: avatar5, name: 'Mikkel'},
    ]
}
export const friendsReducer = (state: FriendsPageType = initialState, action: ActionType): FriendsPageType => {
    switch (action.type) {
        default: return state
    }
}


export default friendsReducer