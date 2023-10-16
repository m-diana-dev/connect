import {ActionType} from "./actions-types.ts";
import {FOLLOW_USER, TOGGLE_ISLOADING, UNFOLLOW_USER, UserType} from "./users-reducer.ts";

const SET_FRIENDS = 'SET-FRIENDS'

export type FriendsPageType = {
    friends: UserType[],
    isLoading: boolean
}

const initialState: FriendsPageType = {
    friends: [],
    isLoading: false
}
export const friendsReducer = (state: FriendsPageType = initialState, action: ActionType): FriendsPageType => {
    switch (action.type) {
        case SET_FRIENDS:
            return {...state, friends: [...action.friends]}
        case TOGGLE_ISLOADING:
            return {...state, isLoading: action.isLoading}
        case FOLLOW_USER:
            return {...state, friends: state.friends.map(el=>el.id===action.id?{...el, followed: true} : el)}
        case UNFOLLOW_USER:
            return {...state, friends: state.friends.map(el=>el.id===action.id?{...el, followed: false} : el)}
        default: return state
    }
}

export const SetFriends = (friends: UserType[]) => ({
    type: SET_FRIENDS,
    friends
} as const)

export default friendsReducer